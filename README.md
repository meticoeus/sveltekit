<p align='center'>
<img src='https://vite-plugin-pwa.netlify.app/banner_light.svg' alt="vite-plugin-pwa - Zero-config PWA for Vite"><br>
Zero-config PWA Framework-agnostic Plugin for Vite
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/vite-plugin-pwa' target="__blank">
<img src='https://img.shields.io/npm/v/vite-plugin-pwa?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://www.npmjs.com/package/vite-plugin-pwa" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-pwa?color=476582&label=">
</a>
<a href="https://vite-plugin-pwa.netlify.app/" target="__blank">
    <img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20guides&color=2e859c" alt="Docs & Guides">
</a>
<br>
<a href="https://github.com/antfu/vite-plugin-pwa" target="__blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/antfu/vite-plugin-pwa?style=social">
</a>
</p>

<br>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>


## 🚀 Features

- 📖 [**Documentation & guides**](https://vite-plugin-pwa.netlify.app/)
- 👌 **Zero-Config**: sensible built-in default configs for common use cases
- 🔩 **Extensible**: expose the full ability to customize the behavior of the plugin
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)
- 🔌 **Offline Support**: generate service worker with offline support (via Workbox)
- ⚡ **Fully tree shakable**: auto inject Web App Manifest
- 💬 **Prompt for new content**: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
- ⚙️ **Stale-while-revalidate**: automatic reload when new content is available
- ✨ **Static assets handling**: configure static assets for offline support
- 🐞 **Development Support**: debug your custom service worker logic as you develop your application

## 📦 Install

```bash
npm i @vite-pwa/sveltekit -D 

# yarn 
yarn add @vite-pwa/sveltekit -D

# pnpm 
pnpm add @vite-pwa/sveltekit -D
```

## 🦄 Usage

Add `SvelteKitPWA` plugin to `vite.config.js / vite.config.ts` and configure it:

```ts
// vite.config.js / vite.config.ts
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default {
  plugins: [
    SvelteKitPWA()
  ]
}
```

Read the [📖 documentation](https://vite-plugin-pwa.netlify.app/guide/) for a complete guide on how to configure and use
this plugin.

## 👀 Full config

Check out the type declaration [src/types.ts](./src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Workbox](https://developers.google.com/web/tools/workbox)


## 📄 License

MIT License © 2022-PRESENT [Anthony Fu](https://github.com/antfu)
