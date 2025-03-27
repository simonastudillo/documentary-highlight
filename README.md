<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
# Documentary Highlight Extension

Esta extensión de Visual Studio Code resalta diferentes tipos de comentarios y elementos de código en archivos PHP para mejorar la legibilidad y facilitar la navegación.

## Características

La extensión aplica decoraciones de color a los siguientes elementos:

### Comentarios de documentación
- `@description` o `@desc`: Resaltado en color `#4DB6AC`.
- `@params`: Resaltado en color `#FFB74D`.
- `@return`: Resaltado en color `#81C784`.
- `@todo`: Resaltado en color `#CE93D8`.
- `@deprecated`: Resaltado en color `#D32F2F`.
- `@throw`: Resaltado en color `#E57373`.
- `@see`: Resaltado en color `#B0BEC5`.
- `@date`: Resaltado en color `#78909C`.
- `@version`: Resaltado en color `#90A4AE`.
- `@author`: Resaltado en color `#9575CD`.

### Estructuras de control
- Palabras clave como `if`, `else`, `for`, `while`, `switch`, etc., resaltadas en color `#C586C0`.

### Tipos de datos
- Tipos como `int`, `float`, `string`, `bool`, `array`, etc., resaltados en color `#B5CEA8`.

### Funciones y clases
- Palabras clave como `function`, `class`, `public`, `private`, `static`, etc., resaltadas en color `#569CD6`.

### Constantes
- Constantes como `true`, `false`, `null`, `define`, `const`, resaltadas en color `#4EC9B0`.

### Operadores
- Operadores como `&&`, `||`, `!`, `==`, `!=`, `<=`, `>=`, `<`, `>`, resaltados en color `#64B5F6`.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre el proyecto en Visual Studio Code.
3. Ejecuta la tarea `Run Extension` desde el menú de depuración.

## Uso

1. Abre un archivo PHP en Visual Studio Code.
2. La extensión aplicará automáticamente las decoraciones de color según los elementos mencionados.

## Contribuciones

Por ahora no se aceptan contribuciones, la extensión se creo para uso personal y del equipo de trabajo, no hay intensión de expandir de momento.

## Licencia

Este proyecto está bajo la licencia MIT.
