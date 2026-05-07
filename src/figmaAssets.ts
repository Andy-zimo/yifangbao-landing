/**
 * Figma MCP 导出的资源地址。远程 URL 在部分环境有过期策略。
 * 上线长期使用本地切图：在 Figma 中导出对应图层为 PNG/SVG，保存为
 *   public/assets/<下方使用的 uuid 文件名>
 * 然后设置环境变量 VITE_LOCAL_FIGMA=1 后重新 build（见 .env.production.example）。
 */
function figmaAsset(id: string): string {
  if (import.meta.env.VITE_LOCAL_FIGMA === "1") {
    return `${import.meta.env.BASE_URL}assets/${id}.png`;
  }
  return `https://www.figma.com/api/mcp/asset/${id}`;
}

export const imgSinopec1 = figmaAsset("3461edc5-27fd-4882-b574-d961e2f8161e");
export const imgStateGrid1 = figmaAsset("9d4598de-8bd5-46db-abe8-bfb1201a1204");
export const imgChinaMobile1 = figmaAsset("7fc1ed10-8722-4cfc-b1a8-a32b02c040d9");
export const imgHuawei1 = figmaAsset("4fca9f8e-26e0-4cfb-aa21-cee042911c3d");
export const imgSany1 = figmaAsset("c2ac5e22-d8f0-441b-b858-d2c419156cb9");
export const imgCscec1 = figmaAsset("b0164d75-325a-4874-a735-9f77324a3abf");
export const imgHikvision1 = figmaAsset("2dea9563-4ed1-4be0-90d6-363c6b3be669");
export const imgCrcc1 = figmaAsset("fa1ef720-bb17-4c0e-9d3a-1acd499e2c65");
export const imgCrrc1 = figmaAsset("a30a86e5-1ed0-47a8-ad71-9da1a21b40fc");
export const imgCccc1 = figmaAsset("b1e4cd2c-4ae7-4a8a-aed3-c5fca4aec30a");
export const imgLogo17Da8Ff21 = figmaAsset("02da6a1b-3f83-4aad-96cc-e166e9b2bf1b");
export const imgWeChatQrCode = figmaAsset("a884640d-d433-4ff3-bd1a-90fb8c7d32f2");
export const imgAppDownloadImage = figmaAsset("f75f60f7-f58f-450f-a7bf-d2f6fdd29529");
export const imgChinaMapTransparent1 = figmaAsset("4c5812d3-7137-4981-8a2f-6400ea94c1ac");
export const img1356E114E95E46DfA6D0F5533988479F1 = figmaAsset(
  "74b39e4c-0ba8-48ec-90df-ed0124a7f9f4",
);
export const imgD3Fc1467874B4E76B2B1B33F8Ea990751 = figmaAsset(
  "400eab97-aab6-44b3-ae2c-118bc13418b0",
);
export const imgChatGptImage2026571046491 = figmaAsset(
  "492484e2-ae81-4899-808c-0d68b5886327",
);
export const imgChatGptImage2026571046541 = figmaAsset(
  "4d45e53b-1731-47f7-9db8-a47f2cc6b895",
);
export const imgBannerRightTrueTransparent1 = figmaAsset(
  "6d7c5c86-eb8f-4a69-9380-95a52f8f725c",
);
export const imgSvg = figmaAsset("232b76fa-4020-41e0-b40f-e19bb571d9df");
export const imgSvg1 = figmaAsset("51f1dd63-b068-4991-b43f-a5b9380cb4f3");
export const imgSvg2 = figmaAsset("f95cf10e-2d57-461f-b53d-4355ad7e8c3c");
export const imgSvg3 = figmaAsset("e7dd0670-1c48-4069-8b61-6ae23dbff82f");
export const imgSvg4 = figmaAsset("2f400158-8ba3-4b44-95c3-d8dfa323433b");
export const imgSvg5 = figmaAsset("e63b9ad1-88db-4fe0-a60c-7fa42b790969");
export const imgSvg6 = figmaAsset("d4e13b94-7015-4810-9168-959043d55327");
export const imgSvg7 = figmaAsset("24670263-729a-4f80-bd0b-95f5b9695057");
export const imgSvg8 = figmaAsset("9ea7a299-e804-4791-88a0-097f96e5ca0a");
export const imgSvg9 = figmaAsset("65b07321-f7e8-4efe-b9c0-11389fc28a10");
export const imgSvg10 = figmaAsset("eb35b925-d009-4e9c-a619-9b4aad15b0f2");
export const imgSvg11 = figmaAsset("386ca421-cdf7-497d-8e5b-69d3f2720b90");
export const imgSvg12 = figmaAsset("43502629-5186-49a7-8d16-115c250626ee");
export const imgGradient = figmaAsset("f17495ac-48c5-427e-a577-09e1c24d8032");
export const imgHeroHeading = figmaAsset("81c2e5d2-5b78-4f70-9a63-bec3497f48d8");
export const imgHeroSubheading = figmaAsset("248b2298-8a2c-423d-b6dd-9be3e3fbc708");
export const imgSvg13 = figmaAsset("4771bdf4-a787-4dce-a1bc-f727e6d89d48");
export const imgSvg14 = figmaAsset("c56c759d-8d18-4fe4-a7d4-60bee6c8ed2d");
export const imgSvg15 = figmaAsset("75083899-d786-4c3b-b4ed-e27eb92223a9");
export const imgSvg16 = figmaAsset("5b00049f-5b40-4c63-9719-b8c38ec96b09");
export const imgVector = figmaAsset("1dcefc17-b13a-4333-861e-906b2b00eba8");
export const imgVector1 = figmaAsset("ae85f09f-90de-4cf5-bb9c-7a28daae848d");
export const imgVector2 = figmaAsset("220f12bf-b73a-46e8-9c93-5610a6b35514");
export const imgVector3 = figmaAsset("ef74102b-f0ae-40ad-a488-6b8e399bebc3");
export const imgVector4 = figmaAsset("8290e066-f741-458f-aef1-4759fe1d131f");
export const imgSvg17 = figmaAsset("956ad09b-c2eb-46de-89fd-d23c58b65043");
