import pool from '../database/database';

class UsuarioDAO {


    public async listar() {
        const result = await pool.query(
                " SELECT u.cveUsuario, u.nombre, u.apellidos, "
                + " u.username "
                + " FROM tbl_usuario u ");
                return result;
        }
        

    public async insertar(usuario: any) {
        const result = await pool.query(
                " INSERT INTO tbl_usuario SET ? ", [usuario]
                );
                return result;
        }

    public async actualizar(usuario: any, cveUsuario: number) {
        const result = await pool.query(
                " UPDATE tbl_usuario SET ? WHERE cveUsuario = ? ", [usuario, cveUsuario]
                );
                return result;
        }
        
    

    public async eliminar(cveUsuario: number) {
        const result = await pool.query(
                " DELETE FROM tbl_usuario WHERE cveUsuario = ? ", [cveUsuario]);
                return result;
        }
        
    

}
const dao = new UsuarioDAO();
export default dao;