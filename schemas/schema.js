// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import callToAction from './callToAction';
import form from './form';
import hero from './hero';
import imageGallery from './imageGallery';
import page from './page';
import service from './service';
import services from './services';
import textWithIllustration from './textWithIllustration';
import video from './video';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    callToAction,
    form,
    hero,
    imageGallery,
    page,
    service,
    services,
    textWithIllustration,
    video
  ]),
})
