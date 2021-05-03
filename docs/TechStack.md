# Technology Stack

<div class="techstack">
  <section>
    <h1>Your integration</h1>
 </section>

  <section>
    <h1>Connection</h1>
    <a>Web Sockets</a>
    <a>Cloud HTTP</a>
    <a>HTTP XML</a>
    <a>Terminal</a>
    <a>RS-232</a>
 </section>

<section>
  <h1>xAPI</h1>
    <a>xConfiguration</a>
    <a>xCommand XML</a>
    <a>xStatus</a>
    <a>xEvent</a>
  </section>

  <section class="features">
    <h1>Device Features</h1>
    <a>Provisioning</a>
    <a>Call</a>
    <a>Conference ctrl</a>
    <a>Volume / mute</a>
    <a>Camera control</a>
    <a>Personalization</a>
    <a>Room Analytics</a>
    <a>Video Composition</a>
    <a>Bookings</a>
    <a>Virtual sources</a>
    <a>GPIO</a>
    <a>CEC</a>
    <a>Standby control</a>
    <a>Sensor data</a>
    <a>Pairing</a>
    <a>Immersive share</a>
    <a>Peripheral Input</a>
    <a>HTTP Client</a>
    <a>WebRTC</a>
    <a>Voice Assistant</a>
    <a>Digital Signage</a>
    <a>Web engine</a>
 </section>
</div>


<table class="techstack">
<tbody>
  <tr>
    <th></th>
    <th>Macros</th>
    <th>Web sockets</th>
    <th>HTTP XML</th>
    <th>HTTP Cloud</th>
    <th>RS-232</th>
    <th>SSH</th>
  </tr>
  <tr>
    <td>Config get/set</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Command</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Status</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Events / feedback</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅*</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Public network</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Authentication</td>
    <td>None</td>
    <td>User</td>
    <td>User</td>
    <td>Token</td>
    <td>None/User</td>
    <td>User</td>
  </tr>
  <tr>
    <td>Deployment</td>
    <td>Any</td>
    <td>Any</td>
    <td>Any</td>
    <td>Cloud</td>
    <td>Any</td>
    <td>Any</td>
  </tr>
  <tr>
    <td>Latency</td>
    <td>Low</td>
    <td>Low</td>
    <td>Low</td>
    <td>Medium</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>Speed</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
    <tr>
    <td>Format</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
  <!-- <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr> -->
</tbody>
</table>


<style>
  .techstack section {
    background: #81b5ae; /* #d89465 #e9b065 #c0b179 #89aa8b #81b5ae */
    padding: 0.5em;
    margin: 2em 0;
    border-radius: 0.4em;
    display: flex;
    flex-wrap: wrap;
  }
  .techstack section:nth-child(1) {
    background: #d89465;
  }

.techstack section a {
    flex-grow: 1;
    padding: 0.8em;
    margin: 0.5em;
    background: white;
    border-radius: 0.4em;
    color: black;
    text-align: center;
  }
.techstack a:hover {
  color: black;
}
.techstack .features a {
  width: 20%;
}
.techstack h1 {
  width: 100%;
  margin: 0.2em;;
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  text-align: center;
}
.techstack td, .techstack th {
  text-align: center;
  min-width: 6em;
}
.techstack td:first-child {
  text-align: left;
}
</style>
