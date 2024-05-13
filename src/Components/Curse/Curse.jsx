import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
  Icon,
} from 'semantic-ui-react'
import './Curse.css'
import { Link } from "react-router-dom";



const Curse = () => (
  <CardGroup className='hover' style={{ marginLeft: '10%' }}>
    <Card className="hover-card">
      <Image src='/src/assets/curse/Hack.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Etisk Hacking</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          I den här kursen kommer du att lära dig penetrationstestning; utvärdering av cybersäkerheten i datornätverk med hjälp av offensiva metoder. Dessa metoder syftar till att finna och utnyttja sårbarheter i programvarubaserade system.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/fullstack.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Fullstack webbutvecklare</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Kursen ger dig en bred programmerings kompetens inom både backend och frontend. Du kommer att kunna utveckla moderna applikationer med hjälp av HTML, CSS och olika JavaScript-bibliotek och även ger dig kunskap om de specifika utvecklingsmiljöer, programspråk och riktlinjer som webben ställer krav på idag.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='fullstak'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/ItJob.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Starta din karriär inom IT</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Kursen ger dig förståelse för IT-branschen och dess olika områden och ger insikter i aktuella trender och möjligheter inom IT, samt råd och vägledning för att starta och främja en framgångsrik karriär inom området.
          Kursen fokuserar också på att utveckla mjuka färdigheter såsom problemlösning, kommunikation och samarbete, vilket är avgörande för att lyckas inom IT-sektorn.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/ItCarear.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Personlig Utveckling </CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Kursen ger dig kunskaper och färdigheter för att definiera dina mål samt strategier och tekniker för att nå dem. Du kommer även att lära dig att hitta balans i livet och att fokusera på det som är viktigast för dig personligen.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/datorer.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Bästa Datorer</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Kursen ger dig grundläggande kunskaper om olika datortyper, deras struktur och funktionalitet. Du kommer att lära dig hur datorer är uppbyggda och vilken typ av datorer som passar bäst för olika typer av arbete eller uppgifter. Genom kursen kommer du att få en översikt över olika datorarkitekturer och deras användningsområden, vilket kommer att hjälpa dig att välja rätt dator för dina behov och preferenser.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/python.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Programmering 1 med Python</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Kursen ger en introduktion till grunderna i programmering och koncept som variabler, datatyper, villkorssatser, loopar och funktioner. Kursen fokuserar också på problemlösning och algoritmiskt tänkande samt introducerar programmeringsprinciper och bästa praxis. Målet är att ge en stark grund för att fortsätta utforska och utveckla sina programmeringsfärdigheter i Python och andra programmeringsspråk.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/csharp.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Programmering 1 med C#</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Denna är obligatorisk för Teknikprogrammet, inriktning Informations- och Medieteknik men ingår även i andra gymnasieprogram. Författare är Krister Trangius, gymnasielärare i Programmering.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card className="hover-card">
      <Image src='/src/assets/curse/matte.png' wrapped ui={false} />
      <CardContent>
        <CardHeader>Matematik 5</CardHeader>
        <CardMeta>
          <span className='date'>Uppdaterad 2024</span>
        </CardMeta>
        <CardDescription>
          Matematik 5 är en gymnasiekurs i den svenska gymnasieskolan. Kursen omfattar 100 poäng. Kursen kom till efter införandet av läroplanen Gy11 och bygger på matematik 4. Kursen är inte obligatorisk på något gymnasieprogram.
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Köp Nu
            </Button>
            <Link to='etisk'><Button basic color='blue'>Läs mer</Button></Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Icon name='video' />
              35 filmer
            </div>
            <div>
              <Icon name='clock' />
              16 timmar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>


  </CardGroup>
)

export default Curse