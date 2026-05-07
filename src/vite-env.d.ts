/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_FIGMA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
