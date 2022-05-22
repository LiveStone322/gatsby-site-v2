function getHumanReadableUrlFromString(str) {
  const regexp = /([а-я]|\w)+/gi
  const array = [...str.matchAll(regexp)].map(([match, _]) => match)
  return translit(array.join("-").toLowerCase())
}

function translit(word) {
  var answer = ""
  var converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
  }

  for (var i = 0; i < word.length; ++i) {
    if (converter[word[i]] == undefined) {
      answer += word[i]
    } else {
      answer += converter[word[i]]
    }
  }

  return answer
}

async function createArticles(createPage, graphql) {
  const artiacles = await graphql(`
    {
      allDatoCmsArticle {
        edges {
          node {
            title
            text {
              value
              links
              blocks
            }
            locale
            createDate
            id
          }
        }
      }
    }
  `)
  artiacles.data.allDatoCmsArticle.edges.forEach(edge => {
    const article = edge.node
    const { locale, id, title } = article

    createPage({
      path: `/${locale === "ru" ? "" : `${locale}/`}${
        getHumanReadableUrlFromString(title) +
        "-" +
        id.slice(id.length - 11, id.length - 3)
      }`,
      component: require.resolve("./src/templates/article.tsx"),
      context: {
        ...article,
      },
    })
  })
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // TODO: try await Promise.all
  await createArticles(createPage, graphql)
}
