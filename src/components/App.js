import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Navbar from './Navbar'
import Visual from './Visual'
import Info from './Info'
import Box from './Box'
import Centered from './Centered'
import Content from './Content'
import SubHeading from './SubHeading'
import Scroll from './Scroll'
import Responsive from './Responsive'
import ResponsiveThemeProvider from './ResponsiveThemeProvider'

import plank from '../images/plank.jpg'
import brood from '../images/brood.jpg'
import broodTop from '../images/brood-top.jpg'
import broodPesto from '../images/brood-pesto-2.jpg'
import basilicum from '../images/basilicum-2.jpg'
import plankCloseup from '../images/plank-closeup.jpg'

import ChefIcon from './ChefIcon'
import SpatulaIcon from './SpatulaIcon'
import GarlicIcon from './GarlicIcon'
import KissIcon from './KissIcon'

injectGlobal([`
  html, body {
    margin: 0;
    background: #000;
    font-family: 'Dancing Script', cursive;
    font-weight: normal;
  }
`])

class App extends Component {
  render() {
    return (
      <Scroll>
    <Responsive>
      <ResponsiveThemeProvider>
        <div>

          <Navbar
            title="Tante Tien"
            payoff="Live cooking & catering"
            />

          <Visual
            image={plank}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam.
            </Visual>

          <Content>

            <Info
              icon={<ChefIcon />}
              title="Some text"
              color="olive"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />

            <Info
              icon={<SpatulaIcon />}
              title="Some text"
              color="grape"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />

            <Info
              icon={<GarlicIcon />}
              title="Some text"
              color="wood"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />

          </Content>


          <Visual
            image={brood}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big">

            <Centered>

              <Info
                icon={<ChefIcon />}
                iconColor="olive"
                description={ <ul><li>test</li></ul> }
                price={37.50}
                alpha={1} />

              <Info
                icon={<SpatulaIcon />}
                iconColor="grape"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum."
                alpha={1} />

              <Info
                icon={<GarlicIcon />}
                iconColor="wood"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum."
                alpha={1} />

            </Centered>

          </Visual>

          <Visual
            image={broodTop}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big" />

          <Visual
            image={basilicum}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big" />

          <Visual
            image={broodPesto}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big" />

          <Visual
            image={plankCloseup}
            heading="Some heading that is quite big"
            subheading="Some subheading that is also quite big" />

          <Content>

            <Info
              icon={<ChefIcon />}
              title="Some text"
              color="olive"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />

            <Info
              icon={<ChefIcon />}
              title="Some text"
              color="grape"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />

            <Info
              icon={<ChefIcon />}
              title="Some text"
              color="wood"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus id arcu maximus pulvinar. Cras pharetra commodo mauris, ut aliquam est consectetur sed. Phasellus nec placerat diam. Donec vel iaculis mauris. Cras condimentum eros quis interdum gravida. Sed sodales sit amet leo vitae dictum." />


            <Box align="center" margin="250px 0 0 0">
              <KissIcon size="4em" color="#9F210E"  />
              <SubHeading>
                Tante Tien
              </SubHeading>
            </Box>

          </Content>

        </div>
      </ResponsiveThemeProvider>
    </Responsive>
    </Scroll>

    );
  }
}

export default App;
