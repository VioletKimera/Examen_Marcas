<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
<!-- Aquí se monta todo, lo dividiré por secciones diciendo lo que va cogiendo del xml-->
  <xsl:template match="/">
    <html>
      <head>
        <title>Fichas Touhou</title> <!-- Titulo de la pestaña en el navegador-->
        <link rel="stylesheet" href="personajes.css" type="text/css"/>
      </head>
      <body>
        <h1>Touhou Koumakyou ~ the Embodiment of Scarlet Devil</h1>

        <xsl:for-each select="personajes/personaje">
          <xsl:sort select="perfil/nombre"/> <!-- ordena por el nombre (aunque al cambiar el formato y pasar de 8 personaje a 2 igual no es que se note precisamente)-->
          
          <!-- Ficha general -->
          <div class="personaje">
            
            <!-- Imagen -->
            <img>
              <xsl:attribute name="src">
                <xsl:value-of select="imagen"/>
              </xsl:attribute>
              <xsl:attribute name="alt">Imagen</xsl:attribute>
            </img>

            <!-- Contenedor, hay 2 "perfiles" por cada ficha (aunque algunas webs posteriores solo  tienen 1 personaje por ficha, pero la importante es esta) -->
            <div class="doble-perfil">
              
              <xsl:for-each select="perfil">
                <div class="perfil">
                  
                  <!-- Nombre y alias  -->
                  <h2 class="nombre">
                    <xsl:value-of select="nombre"/>
                    <i> (<xsl:value-of select="@alias"/>)</i>
                  </h2>

                  <!-- Datos en columna -->
                  <div class="datos">
                    <p><strong>Especie: </strong> <xsl:value-of select="especie"/></p>
                    <p><strong>Poder: </strong> <xsl:value-of select="poder"/></p>
                    <p><strong>Localización: </strong> <xsl:value-of select="localizacion"/></p>
                   
                  </div>

                  <!-- Descripción  -->
                  <div class="descripcion">
                    <xsl:for-each select="descripcion/p">
                      <p><xsl:value-of select="."/></p>
                    </xsl:for-each>
                  </div>

                  <!-- Música y tutulo de la música -->
                  <div class="musica">
                    <p class="titulo-tema"> <xsl:value-of select="tituloAudio"/></p>
                    <audio controls="controls">
                      <source src="{audio}" type="audio/mpeg"/>
                      Tu navegador no soporta el elemento de audio.
                    </audio>
                  </div>

                </div>
                <!-- Boton para volver al menú principal-->
              <a href="../index.html" class="botonB">
               <img src="img/volver.png" alt="Volver"/>
              </a>
              </xsl:for-each>
            </div>

          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
