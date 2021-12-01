using System;
using System.Collections.Generic;

namespace DIO.Bank
{
    class Program
    {
        private static string opcaoUsuario;
        private static object listContas;

        static void Main(string[] args)
        {
            static List<Conta> listContas = new List<Conta>();
            
            string apcaoUsuario = ObterOpcaoUsuario();

            while(opcaoUsuario.ToUpper() != "x")
            {
                switch(opcaoUsuario)
                {
                    case "1":
                    ListarContas();
                    break;
                    case "2":
                    InserirConta();
                    break;
                    case "3":
                    Transferir();
                    break;
                    case "4":
                    Sacar();
                    break;
                    case "5":
                    Depositar();
                    break;
                    case "C":
                    Console.Clear();
                    break;

                    default:
                    throw new ArgumentOutOfRangeException();

                }
            }
        }
            
        private static void Depositar()
        {
            Console.Write("Digite o número da conta: ");
            int indiceConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o valor a ser depositado: ");
            double valorDeposito = double.Parse(Console.ReadLine());

            listContas[indiceConta].depositar(valorDeposito);
        }

        private static void Sacar()
        {
            Console.Write("Digite o número da conta: ");
            int indiceConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o valor a ser sacado: ");
            double valorDeposito = double.Parse(Console.ReadLine());

            listContas[indiceConta].Sacar(valorSaque);
        }

        private static void Transferir()
        {
            Console.Write("Digite o número da conta de origem: ");
            int indiceContaDestinoOrigem = int.Parse(Console.ReadLine());

            Console.Write("Digite o número da conta de destino: ");
            int indiceContaDestino = int.Parse(Console.ReadLine());

            Console.Write("Digite o valor a ser transferido: ");
            double valorTransferencia = double.Parse(Console.ReadLine());

            listContas[indiceContaOrigem].Transferir(valorTransferencia, listContas[indiceContaDestino]);
        }

        private static void InserirConta()
        {
            Console.WriteLine("Inserir nova conta");
            
            Console.Write("Digite 1 para Conta Fisica ou 2 para Juridida: ");
            int entradaTipoConta = int.Parse(Console.ReadLine());

            Console.Write("Digite o Nome do Clientes: ");
            string entradaNome = Console.ReadLine();

            Console.Write("Digite o saldo inicial: ");
            double entradaSaldo = double.Parse(Console.ReadLine());

            Console.Write("Digite o crédito: ");
            double entradaCredito = double.Parse(Console.ReadLine());

            Conta novaConta = new Conta(tipoConta: (TipoConta)entradaTipoConta,
                            entradaSaldo: entradaSaldo,
                            entradaCredito: entradaCredito,
                            nome: entradaNome);

            listContas.Add(novaConta);

        }

        private static void ListarContas()
        {
            Console.WriteLine("Listar contas");

            if(listContas.Count == 0)
            {
                Console.WriteLine("Nenhuma conta cadastrada.");
                return;
            }

            for(int i = 0; i < listContas.Count; i++)
            {
                Conta conta = listContas[1];
                Console.Write("#{0} . ", i);
                Console.WriteLine(conta);
            }
        }

        private static string ObterOpcaoUsuario()
        {
            Console.WriteLine();
            Console.WriteLine("RC Bank a seu dispor!");
            Console.WriteLine("Informe a opção desejada:");

            Console.WriteLine("1- Lista contas");
            Console.WriteLine("2- Inserir nova conta");
            Console.WriteLine("3- Transferir");
            Console.WriteLine("4- Sacar");
            Console.WriteLine("5- Depositar");
            Console.WriteLine("C- Limpar Tela");
            Console.WriteLine("x- Sair");
            Console.WriteLine();

            string opcaoUsuario = Console.ReadLine().ToUpper();
            Console.WriteLine();
            return opcaoUsuario;
        }
    }
}
