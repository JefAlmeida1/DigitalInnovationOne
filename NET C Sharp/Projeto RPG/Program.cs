using System;
using Projeto_RPG.src.Entities;

namespace Projeto_RPG
{
    class Program
    {
        static void Main(string[] args)
        {
            Arus hero = new Arus();
            hero.Name = "Arus";
            hero.level = 2;
            hero.HeroType = "Knight";

            Console.WriteLine("");
        }
    }
}
