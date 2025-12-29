import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WavesIcon from '@mui/icons-material/Waves';

const services = [
  {
    title: 'Online individual counselling',
    description:
      'One-to-one online conversations from anywhere in Aotearoa, held with care and respect. Planned and not yet available.',
    icon: <SelfImprovementIcon color="primary" fontSize="large" />,
  },
  {
    title: 'Support for LGBTQ+ journeys',
    description:
      'Affirming space for identity, belonging, and self-worth, with respect for queer and trans experiences. Planned service, coming soon.',
    icon: <FavoriteIcon color="secondary" fontSize="large" />,
  },
  {
    title: 'Anxiety, self-worth, life transitions',
    description:
      'Gentle support for navigating change, uncertainty, and inner critics. Planned offering once practice opens.',
    icon: <AnchorIcon sx={{ color: 'primary.dark' }} fontSize="large" />,
  },
];

const approachPoints = [
  'Rooted in person-centred, relational counselling with warmth and curiosity.',
  'Trauma-aware practice without rushing or re-traumatising, at your pace.',
  'Affirming and respectful of LGBTQ+ journeys, identities, and self-worth.',
  'Committed to bicultural practice and responding to Te Tiriti o Waitangi in an ongoing way.',
  'I will begin offering counselling only once professional membership, supervision, and insurance are in place.',
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Future Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Placeholder for future integration with Formspree/Netlify/email service
    // eslint-disable-next-line no-alert
    alert(
      `Thank you${name ? `, ${name}` : ''}! I’ll email you at ${email} when I’m ready to accept clients.\n\nYour note: ${message}`,
    );
    event.currentTarget.reset();
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(245, 242, 236, 0.9)',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <WavesIcon color="primary" />
            <Typography variant="h6" component="div" fontWeight={700}>
              Harbourlight Counselling
            </Typography>
          </Stack>
          <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                size="small"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="top"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(45,124,131,0.12), rgba(193,143,107,0.16))',
          borderBottomLeftRadius: { xs: 28, md: 48 },
          borderBottomRightRadius: { xs: 28, md: 48 },
          pb: { xs: 8, md: 12 },
          pt: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="overline" color="primary" letterSpacing={1}>
                    Counselling student: Vince Batters
                  </Typography>
                  <Typography variant="h2" component="h1" gutterBottom>
                    Harbourlight Counselling
                  </Typography>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    Gentle online counselling across Aotearoa.
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ maxWidth: 640 }}>
                    Kia ora, I&apos;m Vince Batters (he/him), a counselling student based in Tāmaki
                    Makaurau Auckland. I am completing a Bachelor of Health Sciences (Counselling)
                    and working towards NZAC provisional membership. My online practice is taking
                    shape with care and intention.
                  </Typography>
                </Box>
                <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="flex-start">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="#contact"
                    sx={{ px: 3, py: 1.2, fontWeight: 700 }}
                  >
                    Be notified when I’m taking clients
                  </Button>
                  <Box
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'secondary.contrastText',
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: (theme) => theme.shadows[3],
                    }}
                  >
                    <Typography variant="body2" fontWeight={700}>
                      Not yet available – online practice coming soon.
                    </Typography>
                    <Typography variant="body2">
                      I&apos;m not currently seeing private clients while I finish my studies and
                      prepare for membership.
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Based in Auckland, offering online sessions across Aotearoa New Zealand.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: (theme) => theme.shadows[6],
                  p: { xs: 3, md: 4 },
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Stack spacing={2}>
                  <Typography variant="h6" color="primary" fontWeight={700}>
                    Practice snapshot
                  </Typography>
                  <Divider />
                  <Typography variant="body1">
                    • Online, grounded, and gentle support
                    <br />• Calm, inclusive space for LGBTQ+ communities
                    <br />• Trauma-aware, person-centred, relational approach
                    <br />• Preparing for NZAC provisional membership &amp; supervision
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I&apos;ll share updates as I complete training and set up safe, ethical
                    practice. Thank you for your patience.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="flex-start">
            <Typography variant="h3" component="h2">
              About Vince
            </Typography>
            <Typography variant="body1">
              I am studying a <strong>Bachelor of Health Sciences (Counselling)</strong> and am a
              counselling student working towards <strong>NZAC provisional membership</strong>.
              Before counselling, I worked in IT as a quality engineer/tester, which sharpened my
              attention to detail, deep listening, and clear communication. My values include
              warmth, curiosity, and non-judgement. I care about inclusive, welcoming spaces,
              especially for LGBTQ+ communities and neurodivergent folks.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Approach Section */}
      <Box
        id="approach"
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Typography variant="h3" component="h2">
              My approach
            </Typography>
            <Stack spacing={2}>
              {approachPoints.map((point) => (
                <Stack key={point} direction="row" spacing={1.5} alignItems="flex-start">
                  <AnchorIcon color="primary" />
                  <Typography variant="body1">{point}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Future Services */}
      <Box id="services" component="section" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography variant="h3" component="h2">
              Future services
            </Typography>
            <Typography variant="body1" color="text.secondary">
              These offerings are planned and will be available once my practice opens. Thank you
              for understanding that I&apos;m not yet seeing private clients.
            </Typography>
            <Grid container spacing={3}>
              {services.map((service) => (
                <Grid item xs={12} sm={6} md={4} key={service.title}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack spacing={2}>
                        <Box>{service.icon}</Box>
                        <Typography variant="h6" component="h3">
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                        <Typography variant="caption" color="secondary.dark" fontWeight={700}>
                          Planned service — not yet available
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, rgba(45,124,131,0.08), rgba(193,143,107,0.12))',
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2.5}>
                <Typography variant="h3" component="h2">
                  Contact
                </Typography>
                <Typography variant="body1">
                  Leave your details to be notified when Harbourlight Counselling opens to clients.
                  This form is not for crisis or emergency situations.
                </Typography>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: (theme) => theme.shadows[4],
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                  component="form"
                  onSubmit={handleContactSubmit}
                >
                  <Stack spacing={2}>
                    <TextField label="Name" name="name" required fullWidth />
                    <TextField label="Email" name="email" type="email" required fullWidth />
                    <TextField
                      label="Message"
                      name="message"
                      required
                      fullWidth
                      multiline
                      minRows={4}
                      placeholder="Share a little about what you’re looking for once the practice opens."
                    />
                    <Button type="submit" variant="contained" color="primary" size="large">
                      Notify me when you’re taking clients
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: (theme) => theme.shadows[3],
                  height: '100%',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Stack spacing={2}>
                  <Typography variant="h6" color="primary" fontWeight={700}>
                    Crisis and urgent support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This form is not monitored for urgent or crisis messages. If you are in immediate
                    danger or need urgent support, please contact your local emergency services or a
                    crisis helpline in Aotearoa.
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" fontWeight={700}>
                      • Call 111 for emergencies
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      • Free call or text 1737 to talk with a trained counsellor
                    </Typography>
                    <Typography variant="body2">
                      • Visit your nearest hospital emergency department or contact your GP
                    </Typography>
                  </Stack>
                  <Divider />
                  <Typography variant="body2" color="text.secondary">
                    I will reply to non-urgent messages when I am ready to accept clients. Thank you
                    for your patience and care.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="space-between">
            <Typography variant="body2">
              © {new Date().getFullYear()} Harbourlight Counselling – Counselling student: Vince
              Batters
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Information on this site is general in nature and does not replace professional or
              crisis services.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
