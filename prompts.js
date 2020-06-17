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