
package parcial;

import javax.swing.JOptionPane;

public class Parcial {

    public static void main(String[] args) {
        
        int jugadores;
        String nombre ;
        int edad;
        double peso;
        double estatura;
        double acomuladorA=0;
        double acomuladorP=0;
        int acomuladorE=0;
        double promedioE,promedioP,promedioA;
        String cadena=" ";
           jugadores= Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad de jugadores"));
           for(int i=1; i<=jugadores; i++){
               nombre= JOptionPane.showInputDialog("Digite el nombre del jugador"+i);
               edad= Integer.parseInt(JOptionPane.showInputDialog("Digite la edad del jugador"));
                peso= Double.parseDouble(JOptionPane.showInputDialog("Digite el peso del jugador"));
                estatura= Double.parseDouble(JOptionPane.showInputDialog("Digite la altura del jugador"));
         
           acomuladorE=acomuladorE+edad;
           acomuladorA=acomuladorA+estatura;
           acomuladorP=acomuladorP+peso;
           
           cadena=cadena+"NOMBRE: "+nombre+"\nEDAD: "+edad+"\nPESO: "+peso+"\nESTATURA: "+estatura;
           
           
           }
           promedioE=acomuladorE/jugadores;
           promedioA=acomuladorA/jugadores;
           promedioP=acomuladorP/jugadores;
           
      JOptionPane.showMessageDialog(null,"DATO DEL EQUIPO\n\n: "+cadena);
      JOptionPane.showMessageDialog(null,"PROMEDIO DE EDAD:"+promedioE+"\nPROMEDIO DE ALTURA: "+promedioA+"\nPROMEDIO DE PESO: "+promedioP);
       
    }
    
}
