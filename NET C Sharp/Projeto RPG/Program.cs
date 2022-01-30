using System;
using Projeto_RPG.src.Entities;

namespace Projeto_RPG
{
    class Program
    {
        static void Main(string[] args)
        {
            Arus hero = new Arus("Arus", 23, "Knight");

            Console.WriteLine(hero.ToString());
        }
    }
}
