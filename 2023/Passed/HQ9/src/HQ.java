//You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:
//
//        If the input is 'H', return 'Hello World!'
//        If the input is 'Q', return the input
//        If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
//
//        99 bottles of beer on the wall, 99 bottles of beer.
//        Take one down and pass it around, 98 bottles of beer on the wall.
//        98 bottles of beer on the wall, 98 bottles of beer.
//        Take one down and pass it around, 97 bottles of beer on the wall.
//        97 bottles of beer on the wall, 97 bottles of beer.
//        Take one down and pass it around, 96 bottles of beer on the wall.
//        ...
//        ...
//        ...
//        2 bottles of beer on the wall, 2 bottles of beer.
//        Take one down and pass it around, 1 bottle of beer on the wall.
//        1 bottle of beer on the wall, 1 bottle of beer.
//        Take one down and pass it around, no more bottles of beer on the wall.
//        No more bottles of beer on the wall, no more bottles of beer.
//        Go to the store and buy some more, 99 bottles of beer on the wall.
//
//        For everything else, don't return anything (return null in C#, None in Rust).
//
//        (+ has no visible effects so we can safely ignore it.)

public class HQ {
    public static String HQ9(char code) {
        if (code == 'H'){
            return "Hello World!";
        } else if ( code == 'Q') {
            return "Q";
        }else if ( code == '9'){
            String cancion = "";
            for (int i = 99; i > 0; i--) {
                if ( i > 2)
                {
                    cancion = cancion + i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                            "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
                } else if ( i == 2) {
                    cancion = cancion + i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                            "Take one down and pass it around, 1 bottle of beer on the wall.\n";
                } else if ( i == 1) {
                    cancion = cancion + i + " bottle of beer on the wall, " + i + " bottle of beer.\n" +
                            "Take one down and pass it around, no more bottles of beer on the wall.\n";
                }
            }cancion = cancion + "No more bottles of beer on the wall, no more bottles of beer.\n" +
                        "Go to the store and buy some more, 99 bottles of beer on the wall.";
            return cancion;
                }
        return null;
    }
    }
