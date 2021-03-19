/*
 * This is an index file for all the components.
 * It gathers everything together.
 * Once you have a component ready, and you want it to be a part
 * of your library, you have to import and export it in this file.
 */
import Box from "./components/Box";
console.log("🚀 ~ file: index.js ~ line 8 ~ Box ", Box);
import Button from "./components/Button";
import Icon from "./components/Icon";
// import Typography from "Typography";

export { Box, Button, Icon /*Typography*/ };
