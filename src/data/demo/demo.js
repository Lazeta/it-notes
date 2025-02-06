import { CodeModule } from "./CodeModule/CodeModule";
import { ImageModule } from "./ImageModule/ImageModule";
import { LinkModule } from "./LinkModule/LinkModule";
import { ListModule } from "./ListModule/ListModule";
import { TextModule } from "./TextModule/TextModule";
import { VideoModule } from "./VideoModule/VideoModule";

export const demo = {
  id: 19,
  title: "< demo >",
  children: [
    LinkModule,
    ImageModule,
    VideoModule,
    TextModule,
    ListModule,
    CodeModule,
  ],
};
