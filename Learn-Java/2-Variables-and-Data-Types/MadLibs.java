public class MadLibs {
  /*
  This program generates a mad libbed story.
  Author: Adam Weiler
  Date: 11/13/2019
  */
  	public static void main(String[] args){
      String name1 = "Jon Snow";
      String adjective1 = "hungry";
      String adjective2 = "pensive";
      String adjective3 = "angry";
      String verb1 = "jumping";
      String noun1 = "hamburger";
      String noun2 = "computer";
      String noun3 = "car";
      String noun4 = "television";
      String noun5 = "organic kombucha";
      String noun6 = "seashell";
      String name2 = "Princess Zelda";
      int number = 42;
      String place1 = "Mexico";
      
      //The template for the story
      String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";
      
      System.out.println(story);
    }       
}
