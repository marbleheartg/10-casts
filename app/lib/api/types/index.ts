export interface Message {
  hash: string
  hashScheme: string
  signature: string
  signatureScheme: string
  signer: string
  data: Data
}

export interface Data {
  type: string
  fid: number
  timestamp: number
  network: string
  castAddBody: CastAddBody
}

export interface CastAddBody {
  embedsDeprecated: string[]
  mentions: number[]
  parentCastId: ParentCastId
  parentUrl: string
  text: string
  mentionsPositions: number[]
  embeds: Embed[]
}

export interface ParentCastId {
  fid: number
  hash: string
}

export interface Embed {
  castId: CastId
}

export interface CastId {
  fid: number
  hash: string
}

export interface Cast {
  object: string
  hash: string
  parent_hash: string
  parent_url: string
  root_parent_url: string
  parent_author: ParentAuthor
  author: Author
  app: App
  text: string
  timestamp: string
  embeds: Embed[]
  type: string
  frames: Frame[]
  reactions: Reactions
  replies: Replies
  thread_hash: string
  mentioned_profiles: MentionedProfile2[]
  mentioned_profiles_ranges: MentionedProfilesRange3[]
  mentioned_channels: MentionedChannel3[]
  mentioned_channels_ranges: MentionedChannelsRange3[]
  channel: Channel2
  viewer_context: ViewerContext14
  author_channel_context: AuthorChannelContext
}

export interface ParentAuthor {
  fid: number
}

export interface Author {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro
  pfp_url: string
  profile: Profile
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses
  verified_accounts: VerifiedAccount[]
  power_badge: boolean
  experimental: Experimental
  viewer_context: ViewerContext2
  score: number
}

export interface Pro {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile {
  bio: Bio
  location: Location
  banner: Banner
}

export interface Bio {
  text: string
  mentioned_profiles: MentionedProfile[]
  mentioned_profiles_ranges: MentionedProfilesRange[]
  mentioned_channels: MentionedChannel[]
  mentioned_channels_ranges: MentionedChannelsRange[]
}

export interface MentionedProfile {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange {
  start: number
  end: number
}

export interface MentionedChannel {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext
}

export interface ViewerContext {
  following: boolean
  role: string
}

export interface MentionedChannelsRange {
  start: number
  end: number
}

export interface Location {
  latitude: number
  longitude: number
  address: Address
  radius: number
}

export interface Address {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner {
  url: string
}

export interface VerifiedAddresses {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary
}

export interface Primary {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount {
  platform: string
  username: string
}

export interface Experimental {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext2 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}

export interface App {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface Embed {
  cast_id: CastId
  cast: Cast2
}

export interface CastId {
  fid: number
  hash: string
}

export interface Cast2 {
  hash: string
  parent_hash: string
  parent_url: string
  root_parent_url: string
  parent_author: ParentAuthor2
  author: Author2
  app: App2
  text: string
  timestamp: string
  embeds: Embed2[]
  channel: Channel
}

export interface ParentAuthor2 {
  fid: number
}

export interface Author2 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface App2 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface Embed2 {
  cast_id: CastId2
  cast: Cast3
}

export interface CastId2 {
  fid: number
  hash: string
}

export interface Cast3 {
  object: string
  hash: string
  author: Author3
  app: App3
}

export interface Author3 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface App3 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface Channel {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext3
}

export interface ViewerContext3 {
  following: boolean
  role: string
}

export interface Frame {
  version: string
  image: string
  frames_url: string
  buttons: Button[]
  post_url: string
  title: string
  image_aspect_ratio: string
  input: Input
  state: State
}

export interface Button {
  title: string
  index: number
  action_type: string
  target: string
  post_url: string
}

export interface Input {
  text: string
}

export interface State {
  serialized: string
}

export interface Reactions {
  likes: Like[]
  recasts: Recast[]
  likes_count: number
  recasts_count: number
}

export interface Like {
  fid: number
  fname: string
}

export interface Recast {
  fid: number
  fname: string
}

export interface Replies {
  count: number
}

export interface MentionedProfile2 {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro2
  pfp_url: string
  profile: Profile2
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses2
  verified_accounts: VerifiedAccount2[]
  power_badge: boolean
  experimental: Experimental2
  viewer_context: ViewerContext5
  score: number
}

export interface Pro2 {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile2 {
  bio: Bio2
  location: Location2
  banner: Banner2
}

export interface Bio2 {
  text: string
  mentioned_profiles: MentionedProfile3[]
  mentioned_profiles_ranges: MentionedProfilesRange2[]
  mentioned_channels: MentionedChannel2[]
  mentioned_channels_ranges: MentionedChannelsRange2[]
}

export interface MentionedProfile3 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange2 {
  start: number
  end: number
}

export interface MentionedChannel2 {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext4
}

export interface ViewerContext4 {
  following: boolean
  role: string
}

export interface MentionedChannelsRange2 {
  start: number
  end: number
}

export interface Location2 {
  latitude: number
  longitude: number
  address: Address2
  radius: number
}

export interface Address2 {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner2 {
  url: string
}

export interface VerifiedAddresses2 {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary2
}

export interface Primary2 {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount2 {
  platform: string
  username: string
}

export interface Experimental2 {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext5 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}

export interface MentionedProfilesRange3 {
  start: number
  end: number
}

export interface MentionedChannel3 {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext6
}

export interface ViewerContext6 {
  following: boolean
  role: string
}

export interface MentionedChannelsRange3 {
  start: number
  end: number
}

export interface Channel2 {
  id: string
  url: string
  name: string
  description: string
  object: string
  created_at: number
  follower_count: number
  external_link: ExternalLink
  image_url: string
  parent_url: string
  lead: Lead
  moderator_fids: number[]
  member_count: number
  moderator: Moderator
  pinned_cast_hash: string
  hosts: Host[]
  viewer_context: ViewerContext13
  description_mentioned_profiles: DescriptionMentionedProfile[]
  description_mentioned_profiles_ranges: DescriptionMentionedProfilesRange[]
}

export interface ExternalLink {
  title: string
  url: string
}

export interface Lead {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro3
  pfp_url: string
  profile: Profile3
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses3
  verified_accounts: VerifiedAccount3[]
  power_badge: boolean
  experimental: Experimental3
  viewer_context: ViewerContext8
  score: number
}

export interface Pro3 {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile3 {
  bio: Bio3
  location: Location3
  banner: Banner3
}

export interface Bio3 {
  text: string
  mentioned_profiles: MentionedProfile4[]
  mentioned_profiles_ranges: MentionedProfilesRange4[]
  mentioned_channels: MentionedChannel4[]
  mentioned_channels_ranges: MentionedChannelsRange4[]
}

export interface MentionedProfile4 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange4 {
  start: number
  end: number
}

export interface MentionedChannel4 {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext7
}

export interface ViewerContext7 {
  following: boolean
  role: string
}

export interface MentionedChannelsRange4 {
  start: number
  end: number
}

export interface Location3 {
  latitude: number
  longitude: number
  address: Address3
  radius: number
}

export interface Address3 {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner3 {
  url: string
}

export interface VerifiedAddresses3 {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary3
}

export interface Primary3 {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount3 {
  platform: string
  username: string
}

export interface Experimental3 {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext8 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}

export interface Moderator {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro4
  pfp_url: string
  profile: Profile4
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses4
  verified_accounts: VerifiedAccount4[]
  power_badge: boolean
  experimental: Experimental4
  viewer_context: ViewerContext10
  score: number
}

export interface Pro4 {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile4 {
  bio: Bio4
  location: Location4
  banner: Banner4
}

export interface Bio4 {
  text: string
  mentioned_profiles: MentionedProfile5[]
  mentioned_profiles_ranges: MentionedProfilesRange5[]
  mentioned_channels: MentionedChannel5[]
  mentioned_channels_ranges: MentionedChannelsRange5[]
}

export interface MentionedProfile5 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange5 {
  start: number
  end: number
}

export interface MentionedChannel5 {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext9
}

export interface ViewerContext9 {
  following: boolean
  role: string
}

export interface MentionedChannelsRange5 {
  start: number
  end: number
}

export interface Location4 {
  latitude: number
  longitude: number
  address: Address4
  radius: number
}

export interface Address4 {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner4 {
  url: string
}

export interface VerifiedAddresses4 {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary4
}

export interface Primary4 {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount4 {
  platform: string
  username: string
}

export interface Experimental4 {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext10 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}

export interface Host {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro5
  pfp_url: string
  profile: Profile5
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses5
  verified_accounts: VerifiedAccount5[]
  power_badge: boolean
  experimental: Experimental5
  viewer_context: ViewerContext12
  score: number
}

export interface Pro5 {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile5 {
  bio: Bio5
  location: Location5
  banner: Banner5
}

export interface Bio5 {
  text: string
  mentioned_profiles: MentionedProfile6[]
  mentioned_profiles_ranges: MentionedProfilesRange6[]
  mentioned_channels: MentionedChannel6[]
  mentioned_channels_ranges: MentionedChannelsRange6[]
}

export interface MentionedProfile6 {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange6 {
  start: number
  end: number
}

export interface MentionedChannel6 {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext11
}

export interface ViewerContext11 {
  following: boolean
  role: string
}

export interface MentionedChannelsRange6 {
  start: number
  end: number
}

export interface Location5 {
  latitude: number
  longitude: number
  address: Address5
  radius: number
}

export interface Address5 {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner5 {
  url: string
}

export interface VerifiedAddresses5 {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary5
}

export interface Primary5 {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount5 {
  platform: string
  username: string
}

export interface Experimental5 {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext12 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}

export interface ViewerContext13 {
  following: boolean
  role: string
}

export interface DescriptionMentionedProfile {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface DescriptionMentionedProfilesRange {
  start: number
  end: number
}

export interface ViewerContext14 {
  liked: boolean
  recasted: boolean
}

export interface AuthorChannelContext {
  following: boolean
  role: string
}

export interface User {
  object: string
  fid: number
  username: string
  display_name: string
  custody_address: string
  pro: Pro
  pfp_url: string
  profile: Profile
  follower_count: number
  following_count: number
  verifications: string[]
  verified_addresses: VerifiedAddresses
  verified_accounts: VerifiedAccount[]
  power_badge: boolean
  experimental: Experimental
  viewer_context: ViewerContext2
  score: number
}

export interface Pro {
  status: string
  subscribed_at: string
  expires_at: string
}

export interface Profile {
  bio: Bio
  location: Location
  banner: Banner
}

export interface Bio {
  text: string
  mentioned_profiles: MentionedProfile[]
  mentioned_profiles_ranges: MentionedProfilesRange[]
  mentioned_channels: MentionedChannel[]
  mentioned_channels_ranges: MentionedChannelsRange[]
}

export interface MentionedProfile {
  object: string
  fid: number
  username: string
  display_name: string
  pfp_url: string
  custody_address: string
}

export interface MentionedProfilesRange {
  start: number
  end: number
}

export interface MentionedChannel {
  id: string
  name: string
  object: string
  image_url: string
  viewer_context: ViewerContext
}

export interface ViewerContext {
  following: boolean
  role: string
}

export interface MentionedChannelsRange {
  start: number
  end: number
}

export interface Location {
  latitude: number
  longitude: number
  address: Address
  radius: number
}

export interface Address {
  city: string
  state: string
  state_code: string
  country: string
  country_code: string
}

export interface Banner {
  url: string
}

export interface VerifiedAddresses {
  eth_addresses: string[]
  sol_addresses: string[]
  primary: Primary
}

export interface Primary {
  eth_address: string
  sol_address: string
}

export interface VerifiedAccount {
  platform: string
  username: string
}

export interface Experimental {
  deprecation_notice: string
  neynar_user_score: number
}

export interface ViewerContext2 {
  following: boolean
  followed_by: boolean
  blocking: boolean
  blocked_by: boolean
}
