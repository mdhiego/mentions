
# Mention Tabs Angular Library

Este é um componente Angular reutilizável para inserir menções com `@`, utilizando `contenteditable`, scroll infinito e popup com múltiplas categorias.

## 📦 Instalação

1. Clone ou extraia esta biblioteca para `projects/mention-tabs` dentro do seu projeto Angular.

2. Verifique se o `angular.json` inclui o projeto `mention-tabs`.

3. Compile a biblioteca:
```bash
ng build mention-tabs
```

## 🚀 Utilização

No seu `AppModule`:
```ts
import { MentionTabsModule } from 'mention-tabs';

@NgModule({
  imports: [MentionTabsModule]
})
export class AppModule {}
```

No seu HTML:
```html
<div contenteditable="true" (input)="onEditorInput($event)" #editor></div>

<app-mention-tabs
  *ngIf="showPopup"
  [position]="position"
  [searchTerm]="searchTerm"
  (onSelect)="handleMention($event)"
  (mentionsChanged)="saveMentions($event)">
</app-mention-tabs>
```

## 🔧 Funcionalidades

- Campo editável com escuta de `@`
- Popup inteligente com tabs: Pessoas, Equipas, Empresas, Tópicos
- Scroll infinito com paginação simulada
- Suporte a múltiplas menções inline
- Emissão da lista de menções via `@Output()`

## 📤 Publicação (opcional)

Para publicar no NPM:

```bash
cd dist/mention-tabs
npm login
npm publish --access public
```

## 👨‍💻 Autor

Antonio Meireles — [ndBIM / BIMWorkplace]
