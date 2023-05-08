# Radiant-v2 Subgraph

Subgraph for Radiant-v2 on Arbitrum-goerli

### Subgraph Status

| network     | subgraph |
| ----------  | :------: | 
| arb-goerli  | https://thegraph.com/hosted-service/subgraph/radiantcapitaldevelopment/radiant-arbi-goerli |  



### Setup & Deploy

````
# prepare constants and subgraph.yaml
$ yarn prepare:{network}

# generate Assembly Script typings
$ yarn codegen:{network}

# compile and build files
$ yarn build:{network}

# authenticate api key
$ yarn auth

# deploy subgraph
$ yarn deploy:{network}
````

### Setting up local node (for development)
1. Install docker on local machine https://docs.docker.com/get-docker/
2. Run `yarn start:node` 
3. Prepare subgraph: `yarn prepare:local`
4. Build subgraph: `yarn codegen:local && yarn build:local`
5. Create local subgraph: `yarn create:local`
6. Deploy to local node: `yarn deploy:local`
7. Subgraph endpoint available at http://localhost:8000/subgraphs/name/sunlightluck/radiantgraph
8. To open indexer logs: `docker logs radiant_indexer -f 2>&1 | grep --line-buffered -i -E --color "WORD_TO_FILTER"`
9. To stop the running containers: `yarn stop:node`
