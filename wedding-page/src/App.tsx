import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline, Typography } from '@mui/material';

const theme = createTheme()



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Henrik och Sofias Bröllopssida med info!
        </Typography>
        <hr />
        <Typography component="h3" variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tempus mi, nec varius velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec euismod libero. Pellentesque consequat commodo magna. Donec eleifend convallis orci suscipit fringilla. Aenean venenatis nibh id suscipit tincidunt. Mauris vitae sapien vitae massa commodo molestie. Aenean finibus, leo vitae posuere tristique, orci lacus vestibulum lorem, ac vulputate turpis magna ut enim. Nunc ut eros eget nibh accumsan mollis sed at ipsum. Aenean tempor, purus nec molestie lacinia, mauris ante gravida justo, a tincidunt augue ipsum ut odio. In ut dui bibendum, porttitor dolor vitae, suscipit arcu. Donec ornare lobortis ex pellentesque condimentum. Nullam tempor ante ac mattis elementum.
        </Typography>
        <Typography component="h3" variant="h5">
          Vivamus eu felis lectus. Nullam suscipit dictum velit sed volutpat. Donec at malesuada risus. Quisque eu nulla tincidunt, efficitur risus in, commodo dolor. Quisque blandit nunc nec nunc volutpat placerat. Integer a orci euismod, iaculis est sed, volutpat justo. Mauris feugiat ac lacus nec maximus.
        </Typography>
        <Typography component="h3" variant="h5">
          Aliquam eget molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum suscipit tellus, in sollicitudin risus malesuada id. Sed eget dictum urna. Vestibulum leo metus, posuere commodo lorem id, feugiat varius nibh. Nam a pharetra quam. Sed vehicula justo nibh, ac mattis nulla fermentum a. Proin placerat, libero non interdum lobortis, turpis ligula hendrerit tortor, at dapibus enim sapien quis risus. Cras gravida dolor orci, sit amet vestibulum odio scelerisque eget. Curabitur at pharetra magna.
        </Typography>
        <Typography component="h3" variant="h5">
          Praesent laoreet augue ut massa congue, sed convallis massa tempor. Vestibulum suscipit ultricies lorem eu sodales. Maecenas cursus, sem eu auctor venenatis, lectus felis luctus lectus, sit amet pretium lacus lacus nec ex. Duis at ipsum ut odio sagittis consequat a elementum arcu. In lobortis lectus eget faucibus vehicula. Donec iaculis odio est, in cursus est scelerisque in. Vestibulum condimentum lectus id erat mattis consectetur. Donec eu gravida dui, a blandit sem. Mauris interdum libero augue, id pretium augue molestie eu. Morbi nibh dui, tempus vitae dui vel, ultrices maximus orci.
        </Typography>
        <Typography component="h3" variant="h5">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce finibus orci augue, tempus aliquam tortor volutpat consectetur. Vestibulum ut elit at nisi fermentum dapibus. Ut consequat odio et tortor lobortis, quis finibus elit imperdiet. Cras interdum, nisl ut semper tempus, nisl mi sodales ipsum, a convallis metus nulla et diam. Praesent pellentesque velit euismod sapien ullamcorper scelerisque. Suspendisse eleifend turpis libero, vitae porttitor purus vehicula eu. Vivamus cursus sapien sed rhoncus varius. Donec accumsan, leo sit amet vehicula faucibus, lorem lectus venenatis felis, sed tristique purus nulla id ex. Vestibulum eu dictum augue. Donec nec risus tincidunt, efficitur risus ac, sollicitudin diam.
        </Typography>
        <Typography component="h3" variant="h5">
          Sed semper ligula et elit eleifend, in iaculis diam vulputate. Nam vitae elit iaculis, pellentesque arcu sit amet, dictum diam. Praesent cursus magna id lectus viverra, quis rhoncus enim pretium. Curabitur commodo nibh id erat volutpat tincidunt. Donec interdum venenatis arcu ut pretium. Quisque eleifend leo id orci iaculis tempus. Donec lobortis eros mollis est ultrices, at euismod tellus rutrum. Integer porttitor dignissim velit. Aenean volutpat viverra dui vitae posuere. Suspendisse a arcu suscipit, volutpat nisi ut, sagittis eros. Sed quis sagittis mauris. Cras et erat quam. Praesent accumsan ex eu mi cursus bibendum. Morbi augue ipsum, sodales nec ornare ut, bibendum non dolor. Nam quis maximus eros.
        </Typography>
        <Typography component="h3" variant="h5">
          Pellentesque magna odio, consectetur imperdiet tincidunt eget, cursus a leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin lobortis, augue sed pulvinar suscipit, urna lorem feugiat nunc, et sagittis nisl lectus sed nulla. Aenean ultricies ex massa, a posuere sem venenatis sit amet. Mauris ut accumsan orci, non iaculis dui. Donec arcu justo, pharetra id mauris ut, lacinia vehicula enim. Donec tincidunt iaculis posuere. Maecenas et tincidunt tellus. Aliquam dui lacus, sagittis at iaculis sed, ornare in risus. Vivamus placerat sapien non quam suscipit, a fermentum metus tempor.
        </Typography>
        <Typography component="h3" variant="h5">
          Maecenas eget porttitor odio, at accumsan nunc. Nulla ac mi eu risus rutrum elementum vitae et dolor. Praesent pellentesque quis turpis quis bibendum. Sed lectus urna, interdum a mi at, dictum molestie purus. Nam faucibus lacus quis mauris convallis, vel mattis ligula porttitor. Donec suscipit quis libero eget commodo. Fusce id lacus eget tortor pretium malesuada eget at libero. Praesent euismod dui in posuere facilisis. Sed gravida fringilla diam placerat viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a velit leo.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
