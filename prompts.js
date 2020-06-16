/*
 * @Author: xujun
 * @Date: 2020-06-16 09:18:10
 * @LastEditTime: 2020-06-16 14:23:12
 * @LastEditors: xujun
 * @FilePath: /vue-cli-plugin-dioskuroi/prompts.js
 * @Description: prompt 文件
 */ 
module.exports = [
  {
    name: 'sentry',
    // // 确认对话只在用户已经选取了特性的时候展示
    // when: answers => answers.features.include('my-feature'),
    message: 'Do you want to use sentry to monitor your project?',
    type: 'confirm',
    default: true
  },
  {
    name: 'token',
    when: answers => answers.sentry,
    message: 'set your sentry token',
    type: 'input',
    default: ''
  },
  {
    name: 'org',
    when: answers => answers.sentry,
    message: 'set your sentry org',
    type: 'input',
    default: 'sentry'
  },
  {
    name: 'project',
    when: answers => answers.sentry,
    message: 'set your sentry project',
    type: 'input'
  }
]
// module.exports = api => {
//   // // 一个特性对象应该是一个有效的 inquirer 选择对象
//   // api.injectFeature({
//   //   name: 'sentry',
//   //   value: 'sentry'
//   // })

//   // injectPrompt 期望接收一个有效的 inquirer 对话对象
//   api.injectPrompt({
//     name: 'sentry',
//     // // 确认对话只在用户已经选取了特性的时候展示
//     // when: answers => answers.features.include('my-feature'),
//     message: 'Do you want to use sentry to monitor your project?',
//     type: 'confirm',
//     default: true
//   })

//   api.injectPrompt({
//     name: 'sentryToken',
//     when: answers => answers.sentry,
//     message: 'set your sentry token',
//     type: 'input',
//     default: ''
//   })

//   api.injectPrompt({
//     name: 'sentryOrg',
//     when: answers => answers.sentry,
//     message: 'set your sentry org',
//     type: 'input',
//     default: 'sentry'
//   })

//   api.injectPrompt({
//     name: 'sentryProject',
//     when: answers => answers.sentry,
//     message: 'set your sentry project',
//     type: 'input'
//   })
//   // 当所有的对话都完成之后，将你的插件注入到
//   // 即将传递给 Generator 的 options 中
//   api.onPromptComplete(({ sentry, sentryToken, sentryOrg, sentryProject }, options) => {
//     if (sentry) {
//       options.plugins['vue-cli-plugin-dioskuroi'] = {
//         token: sentryToken,
//         org: sentryOrg,
//         project: sentryProject
//       }
//     }
//   })
// }