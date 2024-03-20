import "./planets.css";
export default function PlanetAnimation() {
  return (
    <div class="planetsSystemMain">
      <input
        class="planet9"
        id="pluto"
        name="planet"
        type="radio"
        checked="checked"
      />
      <label class="pluto menu" for="pluto">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Bridge
          </h2>
          <h3>09</h3>
        </div>
      </label>
      <input
        class="planet8"
        id="neptune"
        name="planet"
        type="radio"
        checked="checked"
      />
      <label class="neptune menu" for="neptune">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Node Infrastructure
          </h2>
          <h3>08</h3>
        </div>
      </label>
      <input
        class="planet7"
        id="uranus"
        name="planet"
        type="radio"
        checked="checked"
      />
      <label class="uranus menu" for="uranus">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Cross-Chain Asset Management
          </h2>
          <h3>07</h3>
        </div>
      </label>
      <input
        class="planet6"
        id="saturn"
        name="planet"
        type="radio"
        checked="checked"
      />
      <label class="saturn menu" for="saturn">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Decentralized Identity
          </h2>
          <h3>06</h3>
        </div>
      </label>
      <input
        class="planet5"
        id="jupiter"
        name="planet"
        type="radio"
        checked="checked"
      />
      <label class="jupiter menu" for="jupiter">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Decentralized Exchanges (DEXs)
          </h2>
          <h3>05</h3>
        </div>
      </label>
      <input
        checked="checked"
        class="planet4"
        id="mars"
        name="planet"
        type="radio"
      />
      <label class="menu mars" for="mars">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            DAOs
          </h2>
          <h3>0.4</h3>
        </div>
      </label>
      <input
        checked="checked"
        class="planet3"
        id="earth"
        name="planet"
        type="radio"
      />
      <label class="menu earth" for="earth">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Privacy Solutions
          </h2>
          <h3>0.3</h3>
        </div>
      </label>
      <input
        checked="checked"
        class="planet2"
        id="venus"
        name="planet"
        type="radio"
      />
      <label class="menu venus" for="venus">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Decentralized Oracles
          </h2>
          <h3>0.2</h3>
        </div>
      </label>
      <input
        checked="checked"
        class="planet1"
        id="mercury"
        name="planet"
        type="radio"
      />
      <label class="menu mercury" for="mercury">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Decentralized Storage
          </h2>
          <h3>0.1</h3>
        </div>
      </label>
      <div class="solar">
        <div class="solar_systm">
          <div class="planet mercury">
            <div class="planet_description mercury">
              <h2>01</h2>
              <h1>Decentralized Storage</h1>
              <p>
                Decentralized storage solutions for securely storing and
                accessing data on the blockchain.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet venus">
            <div class="planet_description venus">
              <h2>02</h2>
              <h1>Decentralized Oracles</h1>
              <p>
                Decentralized oracle networks for accessing real-world data and
                events on the blockchain.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet earth">
            <div class="planet_description earth">
              <h2>03</h2>
              <h1>Privacy Solutions</h1>
              <p>
                Zero-knowledge proofs (ZKPs) for enabling private and anonymous
                transactions on the blockchain.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet mars">
            <div class="planet_description mars">
              <h2>04</h2>
              <h1>DAOs</h1>
              <p>
                DAO creation platforms for launching and managing decentralized
                autonomous organizations.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet jupiter">
            <div class="planet_description jupiter">
              <h2>05</h2>
              <h1>Decentralized Exchanges (DEXs)</h1>
              <p>
                Automated liquidity provision and market-making protocols for
                decentralized exchanges.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet saturn">
            <div class="planet_description saturn">
              <h2>06</h2>
              <h1>Decentralized Identity</h1>
              <p>
                Self-sovereign identity solutions for individuals to own,
                control, and manage their digital identities.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet uranus">
            <div class="planet_description uranus">
              <h2>07</h2>
              <h1>Cross-Chain Asset Management</h1>
              <p>
                Cross-chain asset management platforms for diversifying and
                managing portfolios across multiple blockchain networks.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet neptune">
            <div class="planet_description neptune">
              <h2>08</h2>
              <h1>Node Infrastructure</h1>
              <p>
                FutureChain provides a robust node infrastructure to support the
                decentralized operation of the network. Nodes play a crucial
                role in maintaining the integrity and security of the blockchain
                by validating transactions, securing consensus, and storing a
                copy of the ledger.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet pluto">
            <div class="planet_description pluto">
              <h2>09</h2>
              <h1>Bridge</h1>
              <p>
                FutureChain aims to enhance interoperability and connectivity
                with other blockchain networks through the implementation of
                bridges. Bridges facilitate the seamless transfer of assets and
                data between FutureChain and other compatible blockchain
                networks, enabling users to leverage the benefits of multiple
                blockchain ecosystems.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet pluto">
            <div class="planet_description pluto">
              <h2>10</h2>
              <h1>Bridge 2</h1>
              <p>
                FutureChain aims to enhance interoperability and connectivity
                with other blockchain networks through the implementation of
                bridges. Bridges facilitate the seamless transfer of assets and
                data between FutureChain and other compatible blockchain
                networks, enabling users to leverage the benefits of multiple
                blockchain ecosystems.
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
