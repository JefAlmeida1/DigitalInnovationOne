using System;

namespace Revisao
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Informe a opção desejada:");
            Console.WriteLine("1- Inserer novo aluno");
            Console.WriteLine("2- Lista alunos");
            Console.WriteLine("-3 Calcular média geral");
            Console.WriteLine("X- Sarir");
            Console.WriteLine();

            string opcaoUsuario = Console.ReadLine();
            while(opcaoUsuario.ToUpper() != "X"){
                switch(opcaoUsuario){
                    case "1":
                    //Adicionar alunos
                    break;
                    case "2":
                    //Listar alunos
                    break;
                    case "3":
                    //Calcular média
                    break;
                    default:
                    throw new ArgumentOutOfRangeException();
                }
                 Console.WriteLine("Informe a opção desejada:");
            Console.WriteLine("1- Inserer novo aluno");
            Console.WriteLine("2- Lista alunos");
            Console.WriteLine("-3 Calcular média geral");
            Console.WriteLine("X- Sarir");
            Console.WriteLine();

            opcaoUsuario = Console.ReadLine();
            }
        }
    }
}
