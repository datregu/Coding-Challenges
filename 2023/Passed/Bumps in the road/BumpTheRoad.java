/*Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead*/
public class BumpsTheRoad {
  public static String bumps(final String road) {
  int count = 0;
    char letra;
    for (int i = 0; i < road.length(); i++){
      if (road.charAt(i) == 'n') count += 1;
    }
    if ( count <= 15  ){
      return "Woohoo!";
  }else{
      return "Car Dead";
    }
}
}