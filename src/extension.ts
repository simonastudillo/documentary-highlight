import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
   console.log('Documentary Highlight extension is now active!'); // Mensaje de activación

   // Decoradores para cada tipo de comentario
   const descriptionDecoration = vscode.window.createTextEditorDecorationType({
      color: '#4DB6AC', // Color para @description
   });

   const paramsDecoration = vscode.window.createTextEditorDecorationType({
      color: '#FFB74D', // Color para @params
   });

   const returnDecoration = vscode.window.createTextEditorDecorationType({
      color: '#81C784', // Color para @return
   });

   const authorDecoration = vscode.window.createTextEditorDecorationType({
      color: '#9575CD', // Color para @author
   });

   const versionDecoration = vscode.window.createTextEditorDecorationType({
      color: '#90A4AE', // Color para @version
   });

   const dateDecoration = vscode.window.createTextEditorDecorationType({
      color: '#78909C', // Color para @date
   });

   const throwDecoration = vscode.window.createTextEditorDecorationType({
      color: '#E57373', // Color para @throw
   });

   const deprecatedDecoration = vscode.window.createTextEditorDecorationType({
      color: '#D32F2F', // Color para @deprecated
   });

   const seeDecoration = vscode.window.createTextEditorDecorationType({
      color: '#B0BEC5', // Color para @see
   });

   const todoDecoration = vscode.window.createTextEditorDecorationType({
      color: '#CE93D8', // Color para @todo
   });

   const controlStructuresDecoration = vscode.window.createTextEditorDecorationType({
      color: '#C586C0', // 
   });

   const dataTypesDecoration = vscode.window.createTextEditorDecorationType({
      color: '#B5CEA8', // 
   });

   const functionsAndClassesDecoration = vscode.window.createTextEditorDecorationType({
      color: '#569CD6', //
   });

   const constantDecoration = vscode.window.createTextEditorDecorationType({
      color: '#4EC9B0', //
   });

   const operatorsDecoration = vscode.window.createTextEditorDecorationType({
      color: '#64B5F6', // Color para for y while
   });

   const updateDecorations = (editor: vscode.TextEditor) => {
      if (editor.document.languageId !== 'php') {
         console.log('El archivo no es PHP.'); // Depuración
         return;
      }

      console.log('Actualizando decoraciones para un archivo PHP.'); // Depuración
      const text = editor.document.getText();

      // Arrays para almacenar las decoraciones de cada tipo
      const descriptionDecorations: vscode.DecorationOptions[] = [];
      const paramsDecorations: vscode.DecorationOptions[] = [];
      const returnDecorations: vscode.DecorationOptions[] = [];
      const authorDecorations: vscode.DecorationOptions[] = [];
      const versionDecorations: vscode.DecorationOptions[] = [];
      const dateDecorations: vscode.DecorationOptions[] = [];
      const throwDecorations: vscode.DecorationOptions[] = [];
      const deprecatedDecorations: vscode.DecorationOptions[] = [];
      const seeDecorations: vscode.DecorationOptions[] = [];
      const todoDecorations: vscode.DecorationOptions[] = [];
      const controlStructuresDecorations: vscode.DecorationOptions[] = [];
      const operatorsDecorations: vscode.DecorationOptions[] = [];
      const dataTypesDecorations: vscode.DecorationOptions[] = [];
      const functionsAndClassesDecorations: vscode.DecorationOptions[] = [];
      const constantDecorations: vscode.DecorationOptions[] = [];

      // Función para buscar y agregar decoraciones
      const addDecorations = (regex: RegExp, decorationsArray: vscode.DecorationOptions[]) => {
         let match;
         while ((match = regex.exec(text))) {
            const startPos = editor.document.positionAt(match.index);
            const endPos = editor.document.positionAt(match.index + match[0].length);
            const range = new vscode.Range(startPos, endPos);
            decorationsArray.push({ range });
         }
      };

      // Buscar y agregar decoraciones para cada tipo
      addDecorations(/(\* @description)/g, descriptionDecorations);
      addDecorations(/(\* @desc)/g, descriptionDecorations);
      addDecorations(/(\* @params)/g, paramsDecorations);
      addDecorations(/(\* @return)/g, returnDecorations);
      addDecorations(/(\* @author)/g, authorDecorations);
      addDecorations(/(\* @version)/g, versionDecorations);
      addDecorations(/(\* @date)/g, dateDecorations);
      addDecorations(/(\* @throw)/g, throwDecorations);
      addDecorations(/(\* @deprecated)/g, deprecatedDecorations);
      addDecorations(/(\* @see)/g, seeDecorations);
      addDecorations(/(\* @todo)/g, todoDecorations);
      addDecorations(/\b(if|else|elseif|switch|case|default|for|while|foreach|break|continue|return)\b/g, controlStructuresDecorations);
      addDecorations(/\b(int|float|string|bool|array|object|null|resource)\b/g, operatorsDecorations);
      addDecorations(/\b(function|class|public|private|protected|static|extends|implements|new|use)\b/g, functionsAndClassesDecorations);
      addDecorations(/\b(true|false|null|define|const)\b/g, constantDecorations);
      addDecorations(/(&&|\|\||!|==|!=|<=|>=|<|>)/g, operatorsDecorations);

      // Aplicar decoraciones al editor
      editor.setDecorations(descriptionDecoration, descriptionDecorations);
      editor.setDecorations(paramsDecoration, paramsDecorations);
      editor.setDecorations(returnDecoration, returnDecorations);
      editor.setDecorations(authorDecoration, authorDecorations);
      editor.setDecorations(versionDecoration, versionDecorations);
      editor.setDecorations(dateDecoration, dateDecorations);
      editor.setDecorations(throwDecoration, throwDecorations);
      editor.setDecorations(deprecatedDecoration, deprecatedDecorations);
      editor.setDecorations(seeDecoration, seeDecorations);
      editor.setDecorations(todoDecoration, todoDecorations);
      editor.setDecorations(controlStructuresDecoration, controlStructuresDecorations);
      editor.setDecorations(operatorsDecoration, operatorsDecorations);
      editor.setDecorations(dataTypesDecoration, dataTypesDecorations);
      editor.setDecorations(functionsAndClassesDecoration, functionsAndClassesDecorations);
      editor.setDecorations(constantDecoration, constantDecorations);
   };

   const activeEditor = vscode.window.activeTextEditor;
   if (activeEditor) {
      updateDecorations(activeEditor);
   }

   vscode.window.onDidChangeActiveTextEditor(
      (editor) => {
         if (editor) {
            updateDecorations(editor);
         }
      },
      null,
      context.subscriptions
   );

   vscode.workspace.onDidChangeTextDocument(
      (event) => {
         const editor = vscode.window.activeTextEditor;
         if (editor && event.document === editor.document) {
            updateDecorations(editor);
         }
      },
      null,
      context.subscriptions
   );
}

export function deactivate() {
   console.log('Documentary Highlight extension is now deactivated.'); // Mensaje de desactivación
}
