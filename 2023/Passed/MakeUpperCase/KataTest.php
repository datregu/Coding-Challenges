<?php

require 'Kata.php'; // Incluimos el archivo con la función a probar

use PHPUnit\Framework\TestCase;

class KataTest extends TestCase {

    public function testMakeUpperCase() {
        // Entrada de prueba
        $input = "hello world";

        // Llamar a la función que deseas probar
        $result = makeUpperCase($input);

        // Comprobar si la salida es igual a la cadena en mayúsculas
        $this->assertEquals("HELLO WORLD", $result);
    }

    public function testMakeUpperCaseWithEmptyString() {
        // Entrada de prueba: cadena vacía
        $input = "";

        // Llamar a la función que deseas probar
        $result = makeUpperCase($input);

        // Comprobar si la salida es una cadena vacía
        $this->assertEquals("", $result);
    }
}
