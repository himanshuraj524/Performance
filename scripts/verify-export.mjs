import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "out");
const projects = [["afterlight-archive", "Afterlight Archive"], ["field-notes", "Field Notes"], ["common-ground", "Common Ground"], ["soft-signal", "Soft Signal"]];
const experience = [
  ["Head of Delivery", "2026–Present"],
  ["Software Development Lead", "Mar 2025–2026"],
  ["Frontend Developer", "Jul 2021–Mar 2025"],
  ["Full Stack Software Engineer Intern", "Jan 2021–Jul 2021"],
];
const requireText = (source, expected, label) => { if (!source.includes(expected)) throw new Error(`${label} is missing ${JSON.stringify(expected)}`); };
const rejectText = (source, unexpected, label) => { if (source.includes(unexpected)) throw new Error(`${label} unexpectedly contains ${JSON.stringify(unexpected)}`); };

const home = await readFile(join(root, "index.html"), "utf8");
for (const text of ["Creative", "Afterlight Archive", "Elastic Type", "himanshurajverma549@gmail.com"]) requireText(home, text, "Homepage");
for (const [role, dates] of experience) { requireText(home, role, "Homepage experience"); requireText(home, dates, "Homepage experience"); }
for (const company of ["Lil Big Things", "Search HomesIndia Pvt. Ltd"]) requireText(home, company, "Homepage experience");
for (const placeholder of ["Employment details to be added", "Company to add", "Role to add", ">Placeholder<"]) rejectText(home, placeholder, "Homepage experience");

for (const [slug, title] of projects) {
  const html = await readFile(join(root, "work", slug, "index.html"), "utf8");
  requireText(html, title, `/${slug}`); requireText(html, "Fictional concept", `/${slug}`); requireText(html, "Results to add", `/${slug}`);
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
for (const [slug] of projects) requireText(sitemap, `/work/${slug}/`, "Sitemap");
const robots = await readFile(join(root, "robots.txt"), "utf8");
requireText(robots, "Sitemap:", "Robots");
for (const asset of ["afterlight-archive.png", "field-notes.svg", "common-ground.svg", "soft-signal.svg"]) await access(join(root, "work", asset));

console.log("Verified homepage experience, four case studies, SEO files, and unique local project media.");
