namespace curso_c_sharp
{
    partial class Enlazar
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            chkTenis = new CheckBox();
            chkCamisas = new CheckBox();
            radPaypal = new RadioButton();
            radTarjeta = new RadioButton();
            btnPagar = new Button();
            lblResultado = new Label();
            btnRegresar = new Button();
            SuspendLayout();
            // 
            // chkTenis
            // 
            chkTenis.AutoSize = true;
            chkTenis.Location = new Point(21, 28);
            chkTenis.Name = "chkTenis";
            chkTenis.Size = new Size(99, 19);
            chkTenis.TabIndex = 1;
            chkTenis.Text = "Tenis(30.000$)";
            chkTenis.UseVisualStyleBackColor = true;
            // 
            // chkCamisas
            // 
            chkCamisas.AutoSize = true;
            chkCamisas.Location = new Point(21, 92);
            chkCamisas.Name = "chkCamisas";
            chkCamisas.Size = new Size(120, 19);
            chkCamisas.TabIndex = 2;
            chkCamisas.Text = "Camisas (10.000$)";
            chkCamisas.UseVisualStyleBackColor = true;
            // 
            // radPaypal
            // 
            radPaypal.AutoSize = true;
            radPaypal.Location = new Point(182, 28);
            radPaypal.Name = "radPaypal";
            radPaypal.Size = new Size(60, 19);
            radPaypal.TabIndex = 3;
            radPaypal.TabStop = true;
            radPaypal.Text = "Paypal";
            radPaypal.UseVisualStyleBackColor = true;
            // 
            // radTarjeta
            // 
            radTarjeta.AutoSize = true;
            radTarjeta.Location = new Point(182, 91);
            radTarjeta.Name = "radTarjeta";
            radTarjeta.Size = new Size(59, 19);
            radTarjeta.TabIndex = 4;
            radTarjeta.TabStop = true;
            radTarjeta.Text = "Tarjeta";
            radTarjeta.UseVisualStyleBackColor = true;
            // 
            // btnPagar
            // 
            btnPagar.Location = new Point(182, 146);
            btnPagar.Name = "btnPagar";
            btnPagar.Size = new Size(75, 23);
            btnPagar.TabIndex = 5;
            btnPagar.Text = "Pagar";
            btnPagar.UseVisualStyleBackColor = true;
            btnPagar.Click += btnPagar_Click;
            // 
            // lblResultado
            // 
            lblResultado.AutoSize = true;
            lblResultado.Location = new Point(24, 184);
            lblResultado.Name = "lblResultado";
            lblResultado.Size = new Size(72, 15);
            lblResultado.TabIndex = 6;
            lblResultado.Text = "lblResultado";
            lblResultado.Click += lblResultado_Click;
            // 
            // btnRegresar
            // 
            btnRegresar.Location = new Point(21, 146);
            btnRegresar.Name = "btnRegresar";
            btnRegresar.Size = new Size(75, 23);
            btnRegresar.TabIndex = 7;
            btnRegresar.Text = "Regresar";
            btnRegresar.UseVisualStyleBackColor = true;
            btnRegresar.Click += btnRegresar_Click;
            // 
            // Enlazar
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(295, 218);
            Controls.Add(btnRegresar);
            Controls.Add(lblResultado);
            Controls.Add(btnPagar);
            Controls.Add(radTarjeta);
            Controls.Add(radPaypal);
            Controls.Add(chkCamisas);
            Controls.Add(chkTenis);
            Name = "Enlazar";
            Text = "Enlazar";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private CheckBox chkTenis;
        private CheckBox chkCamisas;
        private RadioButton radPaypal;
        private RadioButton radTarjeta;
        private Button btnPagar;
        private Label lblResultado;
        private Button btnRegresar;
    }
}