<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
# Documentary Highlight

Esta extensión de Visual Studio Code resalta diferentes tipos de comentarios en archivos PHP utilizando colores personalizados. Es útil para identificar rápidamente etiquetas específicas en comentarios de documentación.

## Características

La extensión detecta y resalta las siguientes etiquetas de comentarios con los colores indicados:

| Etiqueta       | Color      | Hexadecimal |
|----------------|------------|-------------|
| `@description` | Verde agua | `#4DB6AC`   |
| `@params`      | Naranja    | `#FFB74D`   |
| `@return`      | Verde claro| `#81C784`   |
| `@todo`        | Rosa claro | `#CE93D8`   |
| `@deprecated`  | Rojo oscuro| `#D32F2F`   |
| `@throw`       | Rojo claro | `#E57373`   |
| `@author`      | Lila       | `#9575CD`   |
| `@version`     | Gris claro | `#90A4AE`   |
| `@date`        | Gris oscuro| `#78909C`   |
| `@see`         | Gris azul  | `#B0BEC5`   |

## Ejemplo de Uso

En un archivo PHP, los comentarios con las etiquetas soportadas se resaltarán automáticamente. Por ejemplo:

```php
/**
 * @description Este método realiza una operación importante.
 * @params int $a Primer parámetro.
 * @params int $b Segundo parámetro.
 * @return int Resultado de la operación.
 * @todo Implementar validaciones adicionales.
 * @deprecated Este método será eliminado en la próxima versión.
 * @throw Exception Si ocurre un error.
 * @author John Doe
 * @version 1.0.0
 * @date 2023-10-01
 * @see OtroMétodoRelacionado
 */
function ejemplo($a, $b) {
    // Código aquí...
}
```
## Contribuciones

Por ahora no se aceptan contribuciones, la extensión se creo para uso personal y del equipo de trabajo, no hay intensión de expandir de momento.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
