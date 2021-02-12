const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING, 
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });

  sequelize.define('temperamento', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    temperament: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

};
