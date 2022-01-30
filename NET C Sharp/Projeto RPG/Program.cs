using System;
using Projeto_RPG.src.Entities;

namespace Projeto_RPG
{
    class Program
    {
        static void Main(string[] args)
        {
            Hero hero = new Hero("Arus", 23, "Knight");
            Wizard wizard = new Wizard("Jennica", 23, "White Wizard");

            Console.WriteLine(hero);
            Console.WriteLine(hero);
            
        }
    }
}
