
#docker build -t auto-sign-machine:latest  -f docker/Dockerfile .
docker run \
  --name auto-sign-machine \
  -d \
  --label traefik.enable=false \
  -e enable_unicom=true \
  -e user=17596186177\
  -e password=967500\
  -e appid=2422da7c01466c50521cd365d9d651221cc7933a89eb3c33841f36332f50183423ce93ecfc907f3cea0ca28c1acd6f688fcbbaa64a5d30f5f4eb28e4bba2cfb4f6950294003d931dd59a56f8c7fbd70f\
  auto-sign-machine:latest
