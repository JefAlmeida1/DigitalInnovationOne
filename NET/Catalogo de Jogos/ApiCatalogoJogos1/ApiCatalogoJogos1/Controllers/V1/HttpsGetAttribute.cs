using System;

namespace ApiCatalogoJogos1.Controllers.V1
{
    internal class HttpsGetAttribute : Attribute
    {
        private string v;

        public HttpsGetAttribute(string v)
        {
            this.v = v;
        }
    }
}