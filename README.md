# vue-cli-plugin-dioskuroi
A simple Vue-CLI plugin for create vue project.

this plugin include features:

✓ eslint + standard rule

✓ vuex

✓ vue-router

✓ element-ui

✓ unit test

✓ stylus

✓ babel-plugin: proposal-optional-chaining and decorator

✓ webpack-plugin: dllPlugin and happyPack

✓ sentry (which uses to monitor exceptions of your project)

## Create Project
**Recommend:**
```bash
  vue create --preset dioskuroi/vue-cli-plugin-dioskuroi my-project
  cd my-project
  # build dll file
  yarn build:dll
  # start project
  yarn serve
```
**OR:**
> on this version, when you create your project, you need choose vuex vue-router stylus eslint + standard rule.
```bash
  vue create my-project
  cd my-project
  vue add dioskuroi
  # build dll file
  yarn build:dll
  # start project
  yarn serve
```