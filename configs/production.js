module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-git",
      options: {
        name: "production",
        remote: "https://github.com/jcalcaben/external-markdown-content.git",
        branch: "master",
        patterns: "src/**",
      },
    },
  ],
}
