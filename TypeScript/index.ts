 /*
 interface IAnimal{
     nome: string;
     tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibies: number): void;
 }



 interface IFelino extends IAnimal{
     visaoNoturna: boolean;
 }
 const IAnimal: IAnimal = {
    noma: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibies) => (`${alturaEmDecibies}dB`)
 }

 animal.executarRugido('s')

 const felino: IFelino = {
     nome: 'Leão',
     tipo: 'terrestre',
     visaoNorturna: true,
 }

 const input = document.getElementById('input') as HTMLInputElement;
 input.addEventListener('input', (event) =>{
     const i = event.currentTarget as HTMLInputElement;
 });*/

/*types genericos
 function preencheLista<T>(array: any, valor: T){
     return array.map(item => item + valor);
 }
 preencheLista(['A', 'B', 'C'], 'D');
 */

 interface iusuario{
     id: string;
     email: string;
 }

 interface iadmin extends iusuario{
     cargo: 'gerente' | 'coordenador' | 'supervisor';

 }

 function redirecione (usuario: iusuario | iadmin){
 if ('cargo' in usuario){

 }
}