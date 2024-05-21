using curso_c_sharp;

namespace WinFormsApp
{
    public partial class Formulario1 : Form
    {
        public Formulario1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnAceptar_Click(object sender, EventArgs e)
        {
            /*Colocamos un condicional para que si usuario es admin y contraseña 123 diga usuario correcto*/
            if (txtUser.Text == "admin" && txtPass.Text == "123")
            {
               /*Si el password y contraseña son correctos llamamos al formulario enlazar
                * y le ponemos la variable elz que sea igual a la nueva funcion enlazar 
                */

                Enlazar elz = new Enlazar();
                elz.Show();   /*vamos a ponerle a la variable elz el atributo show */
                this.Hide(); /*a esta clase le damos el atributo ocultar*/
            }
            /*De lo contrario diga usuario incorrecto y vuelva a escribir ademas de borrar los textbox*/
            else
            { 
                
                MessageBox.Show("Usuario incorrecto");
                MessageBox.Show("Vuelve a poner usuario y contraseña");
                txtUser.Text = "";
                txtPass.Text = "";

            }
        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            this.Close();/* this significa esta clase y close es cerrar la clase para que cierre este formulario */
        }
    }
}
