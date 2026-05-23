import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>PCAP Sectoral Governance Intelligence Dashboard</title>
      <style>
        body {
          margin: 0;
          padding: 30px;
          background: #f3f5fb;
          font-family: Arial, sans-serif;
          color: #0f172a;
        }
        .card {
          background: white;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          margin-bottom: 20px;
        }
        h1 {
          font-size: 52px;
          margin: 0 0 10px 0;
        }
        .sub {
          color: #64748b;
          font-size: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 24px;
        }
        .metric {
          font-size: 58px;
          font-weight: 800;
        }
        .green { color: #16a34a; }
        .blue { color: #2563eb; }
        .orange { color: #f97316; }
        .red { color: #dc2626; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🧠 PCAP Sectoral Governance Intelligence Dashboard</h1>
        <div class="sub">Recursive Strategic Intelligence • Referential Coherence • Governance Architecture</div>
      </div>

      <div class="grid">
        <div class="card">
          <div>Governance Intelligence Score</div>
          <div class="metric green">82%</div>
        </div>
        <div class="card">
          <div>Sectoral Aggregation Intelligence</div>
          <div class="metric blue">78%</div>
        </div>
        <div class="card">
          <div>Intrinsic OCI-D</div>
          <div class="metric green">84%</div>
        </div>
        <div class="card">
          <div>Intrinsic OCI-O</div>
          <div class="metric orange">68%</div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`SIG dashboard running on port ${port}`);
});
