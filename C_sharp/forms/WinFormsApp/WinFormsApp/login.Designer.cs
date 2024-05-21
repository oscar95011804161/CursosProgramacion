namespace WinFormsApp
{
    partial class Formulario1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            label1 = new Label();
            label2 = new Label();
            txtUser = new TextBox();
            txtPass = new TextBox();
            BtnSalir = new Button();
            BtnAceptar = new Button();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(62, 50);
            label1.Name = "label1";
            label1.Size = new Size(47, 15);
            label1.TabIndex = 0;
            label1.Text = "Usuario";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(62, 114);
            label2.Name = "label2";
            label2.Size = new Size(57, 15);
            label2.TabIndex = 1;
            label2.Text = "Password";
            // 
            // txtUser
            // 
            txtUser.Location = new Point(135, 39);
            txtUser.Name = "txtUser";
            txtUser.Size = new Size(144, 23);
            txtUser.TabIndex = 1;
            // 
            // txtPass
            // 
            txtPass.Location = new Point(135, 114);
            txtPass.Name = "txtPass";
            txtPass.PasswordChar = '*';
            txtPass.Size = new Size(144, 23);
            txtPass.TabIndex = 2;
            // 
            // BtnSalir
            // 
            BtnSalir.Location = new Point(62, 185);
            BtnSalir.Name = "BtnSalir";
            BtnSalir.Size = new Size(75, 23);
            BtnSalir.TabIndex = 4;
            BtnSalir.Text = "salir";
            BtnSalir.UseVisualStyleBackColor = true;
            BtnSalir.Click += btnSalir_Click;
            // 
            // BtnAceptar
            // 
            BtnAceptar.Location = new Point(204, 185);
            BtnAceptar.Name = "BtnAceptar";
            BtnAceptar.Size = new Size(75, 23);
            BtnAceptar.TabIndex = 3;
            BtnAceptar.Text = "aceptar";
            BtnAceptar.UseVisualStyleBackColor = true;
            BtnAceptar.Click += btnAceptar_Click;
            // 
            // Formulario1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.Control;
            BackgroundImageLayout = ImageLayout.Zoom;
            ClientSize = new Size(336, 253);
            Controls.Add(BtnAceptar);
            Controls.Add(BtnSalir);
            Controls.Add(txtPass);
            Controls.Add(txtUser);
            Controls.Add(label2);
            Controls.Add(label1);
            DoubleBuffered = true;
            Name = "Formulario1";
            Text = "Formulario1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Label label2;
        private TextBox txtUser;
        private TextBox txtPass;
        private Button BtnSalir;
        private Button BtnAceptar;
    }
}
