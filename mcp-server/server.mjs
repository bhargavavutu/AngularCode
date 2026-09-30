import {readFile} from "node:fs/promises";
import {join} from "node:path";
import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";

const workspace = process.env.WORKSPACE_FOLDER;

if (!workspace) {
  throw new Error("WORKSPACE_FOLDER is not set");
}

const server = new McpServer({
  name: "angularcode-info",
  version: "1.0.0",
});

server.registerTool(
  "get_angular_version",
  {
    description: "Read the Angular version declared by this project.",
    inputSchema: {},
  },
  async () => {
    const packageJson = JSON.parse(
      await readFile(join(workspace, "package.json"), "utf8"),
    );
    const version = packageJson.dependencies?.["@angular/core"];

    return {
      content: [
        {
          type: "text",
          text: version ?? "Angular is not listed in dependencies.",
        },
      ],
    };
  },
);

await server.connect(new StdioServerTransport());