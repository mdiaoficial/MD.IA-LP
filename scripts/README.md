# Scripts utilitários

Scripts one-shot para processar assets. Rodar manualmente quando necessário.

## `clean-logos.mjs`
Remove fundo colorido de logos de clientes (Volup, WN) gerando versões PNG transparentes. Usa threshold de luminância.

```bash
node scripts/clean-logos.mjs
```

## `clean-mdia-logo.mjs`
Remove fundo preto do logo JPG original da MD.IA, gerando PNG transparente.

```bash
node scripts/clean-mdia-logo.mjs
```

## `compress-photo.mjs`
Comprime e redimensiona `public/dr-dan.jpg` para 1800px width com qualidade 82 (mozjpeg).

```bash
node scripts/compress-photo.mjs
```

## `compress-logo.mjs`
Comprime o PNG do logo da MD.IA (palette + compression 9).

```bash
node scripts/compress-logo.mjs
```

---

**Requisito:** `sharp` (já em devDependencies).

**Quando rodar:** ao adicionar/substituir assets em `public/`, passe por aqui antes de commitar.
