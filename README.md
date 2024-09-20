
<h1>Custom Redis Server</h1>

<p>This is a simple custom Redis server built with Node.js that implements basic Redis commands and can be accessed using the official Redis CLI. It is designed for learning purposes and to provide an understanding of how Redis works under the hood.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#commands-supported">Commands Supported</a></li>
    <li><a href="#example-usage">Example Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li>Implements basic Redis commands</li>
    <li>In-memory data storage</li>
    <li>Supports expiration for keys</li>
    <li>Built using Node.js and TCP protocol</li>
    <li>Can be accessed using the official Redis CLI</li>
</ul>

<h2 id="installation">Installation</h2>
<ol>
    <li><strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/yourusername/custom-redis-server.git
cd custom-redis-server</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
        <p>Make sure you have Node.js installed. Then run:</p>
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<ol>
    <li><strong>Run the server:</strong>
        <p>Start the server by running:</p>
        <pre><code>node index.js</code></pre>
        <p>You should see a message indicating the server has started:</p>
        <pre><code>Redis Clone Server started at port 6378</code></pre>
    </li>
    <li><strong>Connect with Redis CLI:</strong>
        <p>Open another terminal and connect using the Redis CLI:</p>
        <pre><code>redis-cli -h 127.0.0.1 -p 6378</code></pre>
        <p>You can now start executing commands.</p>
    </li>
</ol>

<h2 id="how-it-works">How It Works</h2>
<ul>
    <li><strong>TCP Protocol:</strong> The server listens for incoming TCP connections on port 6378.</li>
    <li><strong>Redis Serialization Protocol:</strong> It uses the Redis Serialization Protocol (RESP) to handle communication between the server and clients.</li>
    <li><strong>Command Handling:</strong> Basic Redis commands are parsed from the incoming data, executed, and responses are sent back to the client.</li>
    <li><strong>In-memory Storage:</strong> The server maintains an in-memory store using JavaScript objects to keep track of key-value pairs.</li>
    <li><strong>Expiration Handling:</strong> The server allows setting expiration times for keys and checks for expired keys during command execution.</li>
</ul>

<h2 id="commands-supported">Commands Supported</h2>
<p>The following Redis commands are currently supported:</p>
<ul>
    <li><code>SET key value</code></li>
    <li><code>GET key</code></li>
    <li><code>DEL key</code></li>
    <li><code>EXPIRE key seconds</code></li>
    <li><code>TTL key</code></li>
    <li><code>INCR key</code></li>
    <li><code>DECR key</code></li>
    <li><code>LPUSH key value1 [value2 ...]</code></li>
    <li><code>RPUSH key value1 [value2 ...]</code></li>
    <li><code>LPOP key</code></li>
    <li><code>RPOP key</code></li>
    <li><code>LRANGE key start stop</code></li>
    <li><code>COMMAND</code></li>
</ul>

<h2 id="example-usage">Example Usage</h2>
<p>Here are some example commands you can run in the Redis CLI after connecting:</p>
<ul>
    <li>Set a key:
        <pre><code>SET mykey "Hello"</code></pre>
    </li>
    <li>Get a key:
        <pre><code>GET mykey</code></pre>
    </li>
    <li>Set expiration:
        <pre><code>EXPIRE mykey 60</code></pre>
    </li>
    <li>Check TTL:
        <pre><code>TTL mykey</code></pre>
    </li>
    <li>Delete a key:
        <pre><code>DEL mykey</code></pre>
    </li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Please create a pull request or open an issue to discuss your ideas.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the LICENSE file for details.</p>
