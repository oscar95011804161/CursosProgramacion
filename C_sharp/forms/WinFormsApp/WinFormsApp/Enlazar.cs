using Microsoft.VisualBasic.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WinFormsApp;

namespace curso_c_sharp
{
    public partial class Enlazar : Form
    {
        public Enlazar()
        {
            InitializeComponent();
            lblResultado.Text = "";
        }


        private void btnSalir_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void lblResultado_Click(object sender, EventArgs e)
        {

        }

        private void btnPagar_Click(object sender, EventArgs e)
        {
            float total = 0;
            string pasarella = "";
            /*Creamos 2 contadores para checar que el radio y el check sean seleccionados*/
            int ConCheck = 0;
            int ConRad = 0;

            if (chkTenis.Checked == true)/*Si chktenis esta seleccionado entonces*/
            {
                total = total + 30000;
                ConCheck++; /*contador para validacion de seleccion de pasarella*/
            }
            if (chkCamisas.Checked == true)/*Si chkcamisas esta seleccionado entonces*/
            {
                total = total + 10000;
                ConCheck++;       /*contador para validacion de seleccion de pasarella*/
            }
            if (radTarjeta.Checked == true)/*Si radio targeta esta seleccionado entonces*/
            {
                pasarella = "Pago con tarjeta ";
                ConRad++;       /*contador para validacion de seleccion de pasarella*/
            }
            if (radPaypal.Checked == true)/*Si radio paypal esta seleccionado entonces*/
            {
                pasarella = "Pago con paypal ";
                ConRad++;     /*contador para validacion de seleccion de pasarella*/
            }

            if (ConCheck > 0 && ConRad > 0) /*Esto es en caso de que se halla seleccionado una pasarella*/
            {
                lblResultado.Text = pasarella + total;
            }
            else /*De lo contrario*/
            {
                lblResultado.Text = "Debes seleccionar por lo menos una pasarela";
            }

            

        }

        private void btnRegresar_Click(object sender, EventArgs e) /*Boton para regresar*/
        {
            Formulario1 login = new Formulario1();
            login.Show();
            this.Hide();   
        }
    }
}
