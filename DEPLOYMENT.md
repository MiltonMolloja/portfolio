# Deployment Guide - Portfolio

Este documento describe cómo deployar el portfolio en producción usando Dokploy.

## 📋 Pre-requisitos

- Servidor con Dokploy instalado
- Acceso SSH al servidor
- Repositorio Git configurado (GitHub)

## 🚀 Deployment con Dokploy

### Opción 1: Deployment desde GitHub (Recomendado)

1. **Acceder a Dokploy Dashboard**
   - URL: `https://tu-servidor.com:3000` (o el puerto configurado)
   - Login con tus credenciales

2. **Crear Nueva Aplicación**
   - Click en "Create Application"
   - Nombre: `portfolio`
   - Tipo: `Docker`

3. **Configurar Repositorio**
   - Repository URL: `https://github.com/MiltonMolloja/portfolio.git`
   - Branch: `master`
   - Build Path: `/`

4. **Configurar Build**
   - Build Method: `Dockerfile`
   - Dockerfile Path: `./Dockerfile`
   - Port: `80`

5. **Configurar Dominio (Opcional)**
   - Domain: `portfolio.tudominio.com`
   - SSL: Activar (Let's Encrypt automático)

6. **Deploy**
   - Click en "Deploy"
   - Esperar a que el build termine (~3-5 minutos)

### Opción 2: Build Manual Local

Si preferís buildear localmente y subir la imagen:

```bash
# 1. Build de la imagen
docker build -t portfolio:latest .

# 2. Tag para tu registry
docker tag portfolio:latest tu-registry.com/portfolio:latest

# 3. Push al registry
docker push tu-registry.com/portfolio:latest

# 4. En Dokploy, usar la imagen del registry
```

## 🔧 Variables de Entorno

Este proyecto no requiere variables de entorno en runtime, ya que toda la configuración está en build time.

Si necesitás agregar variables en el futuro:

```bash
# En Dokploy Dashboard > Application > Environment Variables
API_URL=https://api.tudominio.com
ENVIRONMENT=production
```

## 📦 Estructura del Deployment

```
Dockerfile (Multi-stage build)
├── Stage 1: Build (Node 20 Alpine)
│   ├── Install dependencies
│   ├── Build Angular app
│   └── Output: /app/dist/portfolio/browser
│
└── Stage 2: Serve (Nginx Alpine)
    ├── Copy nginx.conf
    ├── Copy built app
    └── Expose port 80
```

## 🔍 Verificación Post-Deployment

1. **Health Check**
   ```bash
   curl https://tu-dominio.com/health
   # Debería retornar: "healthy"
   ```

2. **Verificar Assets**
   - Abrir DevTools > Network
   - Verificar que CSS/JS se carguen correctamente
   - Verificar cache headers (1 year para assets)

3. **Verificar Routing**
   - Navegar a diferentes rutas
   - Refrescar la página (F5) en cada ruta
   - Todas deberían funcionar sin 404

## 🐛 Troubleshooting

### Build falla con "npm ci failed"

```bash
# Solución: Usar --legacy-peer-deps
# Ya está configurado en el Dockerfile
```

### 404 en rutas de Angular

```bash
# Verificar nginx.conf tiene:
location / {
    try_files $uri $uri/ /index.html;
}
```

### Assets no se cargan

```bash
# Verificar que el build path sea correcto:
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
```

### Imagen muy grande

```bash
# El Dockerfile usa multi-stage build
# Imagen final: ~50MB (nginx alpine + app)
# Si es más grande, verificar .dockerignore
```

## 📊 Métricas de Performance

Después del deployment, verificar con Lighthouse:

- **Performance**: > 90
- **SEO**: 100
- **Best Practices**: > 95
- **Accessibility**: > 85

## 🔄 CI/CD Automático (Opcional)

Para deployments automáticos en cada push:

1. **En Dokploy**:
   - Activar "Auto Deploy on Push"
   - Configurar webhook

2. **En GitHub**:
   - Settings > Webhooks
   - Agregar webhook URL de Dokploy
   - Eventos: `push` en branch `master`

## 🔐 Seguridad

El nginx.conf incluye headers de seguridad:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: no-referrer-when-downgrade`

Para HTTPS, Dokploy configura automáticamente Let's Encrypt.

## 📝 Comandos Útiles

```bash
# Ver logs en tiempo real
dokploy logs portfolio --follow

# Restart de la aplicación
dokploy restart portfolio

# Ver estado
dokploy status portfolio

# Rollback a versión anterior
dokploy rollback portfolio
```

## 🎯 Checklist Pre-Deployment

- [ ] Código pusheado a GitHub
- [ ] Build local exitoso (`npm run build`)
- [ ] Dockerfile testeado localmente
- [ ] nginx.conf configurado
- [ ] .dockerignore optimizado
- [ ] Dominio configurado (DNS apuntando al servidor)
- [ ] SSL/HTTPS configurado en Dokploy

## 📞 Soporte

Si tenés problemas con el deployment:

1. Revisar logs de Dokploy
2. Verificar logs de nginx: `docker logs <container-id>`
3. Testear build local: `docker build -t portfolio-test .`
4. Verificar que el puerto 80 esté expuesto

---

**Última actualización**: Diciembre 2025
**Versión Angular**: 20
**Versión Node**: 20 LTS
