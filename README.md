Setting - React TypeScript Shadcn/ui 

# 설치된 모듈
Vite<br/>
React<br/>
TypeScript<br/>
Tailwind<br/>
Shadcn/ui<br/>
Zustand<br/>
React-hot-toast


## 프로젝트 세팅 과정
<br/>

> vite를 사용하여 react-ts 설치 <br/>
1. npm create vite@latest . --template react-ts
2. npm i 


<br>

> Vite 환경에서 path alias 설정하기 <br/>

3. npm install vite-tsconfig-paths --save-dev<br/>
( Vite와 타입스크립트 paths를 공유한다 )

`tsconfig.json`<br/>
```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
```
<br/>

`tsconfig.app.json`
```json
"extends": "./tsconfig.json",
```
<br/>

`vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
});
```
<br/>

> Shadcn/ui 설치 <br/>
4. npm install -D tailwindcss postcss autoprefixer
5. npx tailwindcss init -p
6. npx shadcn-ui@latest init

```bash
$ npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » New York
√ Which color would you like to use as base color? » Neutral
√ Where is your global CSS file? ... ./src/styles/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes
```
> zustand 설치 <br/>
7. npm i zustand
> react-hot-toast 설치 <br/>
8. npm i react-hot-toast

