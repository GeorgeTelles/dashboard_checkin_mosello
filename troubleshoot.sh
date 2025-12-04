#!/bin/bash
# Troubleshooting script - Execute no servidor via SSH ou terminal do Portainer

echo "=== 1. Verificando se o container está rodando ==="
docker ps | grep mosello-dashboard

echo ""
echo "=== 2. Verificando labels do container ==="
docker inspect mosello-dashboard --format='{{json .Config.Labels}}' | jq

echo ""
echo "=== 3. Verificando redes do container ==="
docker inspect mosello-dashboard --format='{{json .NetworkSettings.Networks}}' | jq

echo ""
echo "=== 4. Verificando logs do Traefik (últimas 50 linhas) ==="
docker logs traefik --tail 50 | grep -i "mosello-dashboard\|dashboard.mosello"

echo ""
echo "=== 5. Testando acesso direto ao Nginx dentro do container ==="
docker exec mosello-dashboard wget -qO- http://localhost/

echo ""
echo "=== 6. Verificando routers do Traefik ==="
docker exec traefik wget -qO- http://localhost:8080/api/http/routers | jq '.[] | select(.name | contains("dashboard"))'
