[1mdiff --git a/exercicios/e3/localizacao.mjs b/exercicios/e3/localizacao.mjs[m
[1mindex 6de9ed5..ac0a5aa 100644[m
[1m--- a/exercicios/e3/localizacao.mjs[m
[1m+++ b/exercicios/e3/localizacao.mjs[m
[36m@@ -1,22 +1,13 @@[m
[31m-const minhaLocalizacao = { x: 3, y: 4 };[m
[32m+[m[32mexport const minhaLocalizacao = { x: 3, y: 4 };[m
 [m
[31m-function descrever(ponto) {[m
[32m+[m[32mexport function descrever(ponto) {[m
   return `(${ponto.x}, ${ponto.y})`;[m
 }[m
 [m
[31m-function distancia(a, b) {[m
[32m+[m[32mexport function distancia(a, b) {[m
   return Math.hypot(b.x - a.x, b.y - a.y);[m
 }[m
 [m
[31m-function mover(ponto, dx, dy) {[m
[32m+[m[32mexport function mover(ponto, dx, dy) {[m
   return { x: ponto.x + dx, y: ponto.y + dy };[m
 }[m
[31m-[m
[31m-if (require.main === module) {[m
[31m-  const origem = { x: 0, y: 0 };[m
[31m-  console.log(`Minha localização: ${descrever(minhaLocalizacao)}`);[m
[31m-  console.log(`Distância até a origem: ${distancia(origem, minhaLocalizacao)}`);[m
[31m-  console.log(`Depois de mover (1, -1): ${descrever(mover(minhaLocalizacao, 1, -1))}`);[m
[31m-}[m
[31m-[m
[31m-module.exports = { minhaLocalizacao, descrever, distancia, mover };[m
[1mdiff --git a/exercicios/e3/saudacao.mjs b/exercicios/e3/saudacao.mjs[m
[1mindex 3302279..c1fbfff 100644[m
[1m--- a/exercicios/e3/saudacao.mjs[m
[1m+++ b/exercicios/e3/saudacao.mjs[m
[36m@@ -1,11 +1,3 @@[m
[31m-function saudar(nome = "mundo") {[m
[32m+[m[32mexport function saudar(nome = "mundo") {[m
   return `Olá, ${nome}!`;[m
 }[m
[31m-[m
[31m-// Só imprime quando executado diretamente (node 01-saudacao.js), não quando importado.[m
[31m-if (require.main === module) {[m
[31m-  console.log(saudar());[m
[31m-  console.log(saudar("Ana"));[m
[31m-}[m
[31m-[m
[31m-module.exports = { saudar };[m
